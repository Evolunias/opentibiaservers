import MediviaNonPvpServerArgentinaKeywordPage, { generateMetadata } from './medivia-non-pvp-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaNonPvpServerArgentinaKeywordPage />;
}
