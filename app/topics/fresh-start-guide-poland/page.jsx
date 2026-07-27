import FreshStartGuidePolandKeywordPage, { generateMetadata } from './fresh-start-guide-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartGuidePolandKeywordPage />;
}
