import Canob12PvpServerKeywordPage, { generateMetadata } from './canob-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob12PvpServerKeywordPage />;
}
