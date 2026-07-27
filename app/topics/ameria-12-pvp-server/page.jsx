import Ameria12PvpServerKeywordPage, { generateMetadata } from './ameria-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria12PvpServerKeywordPage />;
}
