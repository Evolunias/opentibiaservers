import Classicus81NonPvpServerKeywordPage, { generateMetadata } from './classicus-8-1-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus81NonPvpServerKeywordPage />;
}
