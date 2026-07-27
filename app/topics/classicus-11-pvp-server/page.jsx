import Classicus11PvpServerKeywordPage, { generateMetadata } from './classicus-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus11PvpServerKeywordPage />;
}
