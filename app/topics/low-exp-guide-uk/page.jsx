import LowExpGuideUkKeywordPage, { generateMetadata } from './low-exp-guide-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpGuideUkKeywordPage />;
}
