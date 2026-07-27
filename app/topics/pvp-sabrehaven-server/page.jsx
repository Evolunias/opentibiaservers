import PvpSabrehavenServerKeywordPage, { generateMetadata } from './pvp-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpSabrehavenServerKeywordPage />;
}
