import Classicus100NonPvpServerKeywordPage, { generateMetadata } from './classicus-10-0-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus100NonPvpServerKeywordPage />;
}
