import LowExpGuideCanadaKeywordPage, { generateMetadata } from './low-exp-guide-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpGuideCanadaKeywordPage />;
}
