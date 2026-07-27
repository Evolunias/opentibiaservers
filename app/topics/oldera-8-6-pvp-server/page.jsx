import Oldera86PvpServerKeywordPage, { generateMetadata } from './oldera-8-6-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera86PvpServerKeywordPage />;
}
