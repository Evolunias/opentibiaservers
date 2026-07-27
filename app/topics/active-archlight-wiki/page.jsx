import ActiveArchlightWikiKeywordPage, { generateMetadata } from './active-archlight-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArchlightWikiKeywordPage />;
}
