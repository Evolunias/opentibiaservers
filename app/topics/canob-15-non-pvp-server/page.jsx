import Canob15NonPvpServerKeywordPage, { generateMetadata } from './canob-15-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob15NonPvpServerKeywordPage />;
}
