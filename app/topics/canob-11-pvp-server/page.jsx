import Canob11PvpServerKeywordPage, { generateMetadata } from './canob-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob11PvpServerKeywordPage />;
}
