import TopMediviaWikiKeywordPage, { generateMetadata } from './top-medivia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMediviaWikiKeywordPage />;
}
