import Canob15PvpServerKeywordPage, { generateMetadata } from './canob-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob15PvpServerKeywordPage />;
}
