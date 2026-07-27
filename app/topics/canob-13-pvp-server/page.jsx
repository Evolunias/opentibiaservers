import Canob13PvpServerKeywordPage, { generateMetadata } from './canob-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob13PvpServerKeywordPage />;
}
