import Ameria13PvpServerKeywordPage, { generateMetadata } from './ameria-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria13PvpServerKeywordPage />;
}
