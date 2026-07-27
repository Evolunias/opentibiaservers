import Classicus80PvpServerKeywordPage, { generateMetadata } from './classicus-8-0-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus80PvpServerKeywordPage />;
}
