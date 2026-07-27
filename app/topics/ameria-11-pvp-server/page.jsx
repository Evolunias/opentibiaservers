import Ameria11PvpServerKeywordPage, { generateMetadata } from './ameria-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria11PvpServerKeywordPage />;
}
