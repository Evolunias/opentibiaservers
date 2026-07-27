import BaiakServerSeasonKeywordPage, { generateMetadata } from './baiak-server-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServerSeasonKeywordPage />;
}
