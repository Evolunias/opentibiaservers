import HighExpGuideUkKeywordPage, { generateMetadata } from './high-exp-guide-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpGuideUkKeywordPage />;
}
