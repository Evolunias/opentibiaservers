import ActiveAlasteraWikiKeywordPage, { generateMetadata } from './active-alastera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAlasteraWikiKeywordPage />;
}
