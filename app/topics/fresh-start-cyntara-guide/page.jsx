import FreshStartCyntaraGuideKeywordPage, { generateMetadata } from './fresh-start-cyntara-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCyntaraGuideKeywordPage />;
}
