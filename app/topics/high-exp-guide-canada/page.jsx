import HighExpGuideCanadaKeywordPage, { generateMetadata } from './high-exp-guide-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpGuideCanadaKeywordPage />;
}
