import Classicus12PvpServerKeywordPage, { generateMetadata } from './classicus-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus12PvpServerKeywordPage />;
}
