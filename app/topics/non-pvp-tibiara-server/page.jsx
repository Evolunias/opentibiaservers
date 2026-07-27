import NonPvpTibiaraServerKeywordPage, { generateMetadata } from './non-pvp-tibiara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpTibiaraServerKeywordPage />;
}
