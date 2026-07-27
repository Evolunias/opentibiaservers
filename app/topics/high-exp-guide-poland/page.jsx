import HighExpGuidePolandKeywordPage, { generateMetadata } from './high-exp-guide-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpGuidePolandKeywordPage />;
}
