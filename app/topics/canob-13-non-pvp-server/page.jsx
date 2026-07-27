import Canob13NonPvpServerKeywordPage, { generateMetadata } from './canob-13-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob13NonPvpServerKeywordPage />;
}
