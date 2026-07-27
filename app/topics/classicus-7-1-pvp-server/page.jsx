import Classicus71PvpServerKeywordPage, { generateMetadata } from './classicus-7-1-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus71PvpServerKeywordPage />;
}
