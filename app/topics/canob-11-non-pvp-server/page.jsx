import Canob11NonPvpServerKeywordPage, { generateMetadata } from './canob-11-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob11NonPvpServerKeywordPage />;
}
