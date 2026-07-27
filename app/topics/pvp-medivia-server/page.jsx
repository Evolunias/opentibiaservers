import PvpMediviaServerKeywordPage, { generateMetadata } from './pvp-medivia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpMediviaServerKeywordPage />;
}
