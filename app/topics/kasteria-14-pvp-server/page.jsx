import Kasteria14PvpServerKeywordPage, { generateMetadata } from './kasteria-14-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria14PvpServerKeywordPage />;
}
