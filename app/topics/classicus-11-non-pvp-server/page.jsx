import Classicus11NonPvpServerKeywordPage, { generateMetadata } from './classicus-11-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus11NonPvpServerKeywordPage />;
}
