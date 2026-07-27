import Thornia81PvpServerKeywordPage, { generateMetadata } from './thornia-8-1-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia81PvpServerKeywordPage />;
}
