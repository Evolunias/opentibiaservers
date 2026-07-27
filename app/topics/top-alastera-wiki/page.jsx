import TopAlasteraWikiKeywordPage, { generateMetadata } from './top-alastera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAlasteraWikiKeywordPage />;
}
