import Oldera13PvpServerKeywordPage, { generateMetadata } from './oldera-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera13PvpServerKeywordPage />;
}
