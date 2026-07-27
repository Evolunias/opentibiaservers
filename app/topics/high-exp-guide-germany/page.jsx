import HighExpGuideGermanyKeywordPage, { generateMetadata } from './high-exp-guide-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpGuideGermanyKeywordPage />;
}
