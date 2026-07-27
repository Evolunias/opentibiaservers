import LowExpGuideEuropeKeywordPage, { generateMetadata } from './low-exp-guide-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpGuideEuropeKeywordPage />;
}
