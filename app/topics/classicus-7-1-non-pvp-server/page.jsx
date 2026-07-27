import Classicus71NonPvpServerKeywordPage, { generateMetadata } from './classicus-7-1-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus71NonPvpServerKeywordPage />;
}
