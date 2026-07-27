import PopularArchlightWikiKeywordPage, { generateMetadata } from './popular-archlight-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArchlightWikiKeywordPage />;
}
