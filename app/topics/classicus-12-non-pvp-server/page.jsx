import Classicus12NonPvpServerKeywordPage, { generateMetadata } from './classicus-12-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus12NonPvpServerKeywordPage />;
}
