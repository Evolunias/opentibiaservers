import FreshStartGuideBrazilKeywordPage, { generateMetadata } from './fresh-start-guide-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartGuideBrazilKeywordPage />;
}
