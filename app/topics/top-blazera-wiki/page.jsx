import TopBlazeraWikiKeywordPage, { generateMetadata } from './top-blazera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopBlazeraWikiKeywordPage />;
}
