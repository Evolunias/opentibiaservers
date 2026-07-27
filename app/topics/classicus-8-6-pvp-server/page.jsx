import Classicus86PvpServerKeywordPage, { generateMetadata } from './classicus-8-6-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus86PvpServerKeywordPage />;
}
