import Ameria15PvpServerKeywordPage, { generateMetadata } from './ameria-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria15PvpServerKeywordPage />;
}
