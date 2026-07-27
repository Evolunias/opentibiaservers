import HighExpGuideUsaKeywordPage, { generateMetadata } from './high-exp-guide-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpGuideUsaKeywordPage />;
}
