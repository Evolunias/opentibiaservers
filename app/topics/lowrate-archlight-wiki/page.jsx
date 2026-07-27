import LowrateArchlightWikiKeywordPage, { generateMetadata } from './lowrate-archlight-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArchlightWikiKeywordPage />;
}
