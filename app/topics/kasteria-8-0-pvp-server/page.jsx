import Kasteria80PvpServerKeywordPage, { generateMetadata } from './kasteria-8-0-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria80PvpServerKeywordPage />;
}
