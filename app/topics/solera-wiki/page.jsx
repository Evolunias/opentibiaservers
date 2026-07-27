import SoleraWikiKeywordPage, { generateMetadata } from './solera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SoleraWikiKeywordPage />;
}
