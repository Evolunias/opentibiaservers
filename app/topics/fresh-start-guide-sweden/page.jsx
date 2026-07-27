import FreshStartGuideSwedenKeywordPage, { generateMetadata } from './fresh-start-guide-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartGuideSwedenKeywordPage />;
}
