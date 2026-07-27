import FreshStartThaisotGuideKeywordPage, { generateMetadata } from './fresh-start-thaisot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThaisotGuideKeywordPage />;
}
