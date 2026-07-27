import CurrentAlasteraWikiKeywordPage, { generateMetadata } from './current-alastera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAlasteraWikiKeywordPage />;
}
