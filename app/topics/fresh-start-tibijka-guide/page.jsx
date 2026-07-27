import FreshStartTibijkaGuideKeywordPage, { generateMetadata } from './fresh-start-tibijka-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibijkaGuideKeywordPage />;
}
