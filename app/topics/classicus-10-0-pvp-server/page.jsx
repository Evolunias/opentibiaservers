import Classicus100PvpServerKeywordPage, { generateMetadata } from './classicus-10-0-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus100PvpServerKeywordPage />;
}
