import Canob14NonPvpServerKeywordPage, { generateMetadata } from './canob-14-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob14NonPvpServerKeywordPage />;
}
