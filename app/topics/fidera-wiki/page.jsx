import FideraWikiKeywordPage, { generateMetadata } from './fidera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FideraWikiKeywordPage />;
}
