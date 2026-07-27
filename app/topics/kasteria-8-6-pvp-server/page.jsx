import Kasteria86PvpServerKeywordPage, { generateMetadata } from './kasteria-8-6-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria86PvpServerKeywordPage />;
}
