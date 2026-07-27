import Medivia11PvpServerKeywordPage, { generateMetadata } from './medivia-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia11PvpServerKeywordPage />;
}
