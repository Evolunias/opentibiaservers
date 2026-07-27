import TopArchlightWikiKeywordPage, { generateMetadata } from './top-archlight-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArchlightWikiKeywordPage />;
}
