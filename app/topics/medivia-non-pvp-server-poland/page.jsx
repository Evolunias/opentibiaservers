import MediviaNonPvpServerPolandKeywordPage, { generateMetadata } from './medivia-non-pvp-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaNonPvpServerPolandKeywordPage />;
}
