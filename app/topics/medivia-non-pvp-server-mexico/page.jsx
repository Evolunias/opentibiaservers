import MediviaNonPvpServerMexicoKeywordPage, { generateMetadata } from './medivia-non-pvp-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaNonPvpServerMexicoKeywordPage />;
}
