import Classicus13PvpServerKeywordPage, { generateMetadata } from './classicus-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus13PvpServerKeywordPage />;
}
