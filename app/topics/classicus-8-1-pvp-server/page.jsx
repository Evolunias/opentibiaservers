import Classicus81PvpServerKeywordPage, { generateMetadata } from './classicus-8-1-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus81PvpServerKeywordPage />;
}
