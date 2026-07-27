import CustomArchlightWikiKeywordPage, { generateMetadata } from './custom-archlight-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArchlightWikiKeywordPage />;
}
