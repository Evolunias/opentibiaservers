import Classicus13NonPvpServerKeywordPage, { generateMetadata } from './classicus-13-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus13NonPvpServerKeywordPage />;
}
