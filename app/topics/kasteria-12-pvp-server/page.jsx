import Kasteria12PvpServerKeywordPage, { generateMetadata } from './kasteria-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria12PvpServerKeywordPage />;
}
