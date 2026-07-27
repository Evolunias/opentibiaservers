import Oldera80PvpServerKeywordPage, { generateMetadata } from './oldera-8-0-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera80PvpServerKeywordPage />;
}
