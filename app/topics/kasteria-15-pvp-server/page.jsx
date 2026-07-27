import Kasteria15PvpServerKeywordPage, { generateMetadata } from './kasteria-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria15PvpServerKeywordPage />;
}
