import ArchlightWikiKeywordPage, { generateMetadata } from './archlight-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightWikiKeywordPage />;
}
