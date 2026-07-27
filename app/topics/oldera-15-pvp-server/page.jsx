import Oldera15PvpServerKeywordPage, { generateMetadata } from './oldera-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera15PvpServerKeywordPage />;
}
