import Kasteria96PvpServerKeywordPage, { generateMetadata } from './kasteria-9-6-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria96PvpServerKeywordPage />;
}
