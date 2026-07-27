import CurrentArchlightWikiKeywordPage, { generateMetadata } from './current-archlight-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArchlightWikiKeywordPage />;
}
