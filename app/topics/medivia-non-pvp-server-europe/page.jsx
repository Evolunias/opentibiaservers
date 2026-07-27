import MediviaNonPvpServerEuropeKeywordPage, { generateMetadata } from './medivia-non-pvp-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaNonPvpServerEuropeKeywordPage />;
}
