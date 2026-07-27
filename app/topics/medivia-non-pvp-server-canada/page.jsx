import MediviaNonPvpServerCanadaKeywordPage, { generateMetadata } from './medivia-non-pvp-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaNonPvpServerCanadaKeywordPage />;
}
