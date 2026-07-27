import FreshStartOxygenotGuideKeywordPage, { generateMetadata } from './fresh-start-oxygenot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOxygenotGuideKeywordPage />;
}
