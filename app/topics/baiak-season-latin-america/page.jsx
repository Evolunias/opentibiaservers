import BaiakSeasonLatinAmericaKeywordPage, { generateMetadata } from './baiak-season-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakSeasonLatinAmericaKeywordPage />;
}
