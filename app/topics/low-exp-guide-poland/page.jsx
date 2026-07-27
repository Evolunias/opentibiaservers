import LowExpGuidePolandKeywordPage, { generateMetadata } from './low-exp-guide-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpGuidePolandKeywordPage />;
}
