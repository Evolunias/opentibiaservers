import FreshStartGuideUkKeywordPage, { generateMetadata } from './fresh-start-guide-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartGuideUkKeywordPage />;
}
