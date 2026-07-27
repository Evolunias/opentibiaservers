import BaiakSeasonCanadaKeywordPage, { generateMetadata } from './baiak-season-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakSeasonCanadaKeywordPage />;
}
