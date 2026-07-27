import BaiakSeasonMexicoKeywordPage, { generateMetadata } from './baiak-season-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakSeasonMexicoKeywordPage />;
}
