import Medivia11NonPvpServerKeywordPage, { generateMetadata } from './medivia-11-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia11NonPvpServerKeywordPage />;
}
