import Medivia12PvpServerKeywordPage, { generateMetadata } from './medivia-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia12PvpServerKeywordPage />;
}
