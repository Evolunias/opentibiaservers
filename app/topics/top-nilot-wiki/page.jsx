import TopNilotWikiKeywordPage, { generateMetadata } from './top-nilot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNilotWikiKeywordPage />;
}
