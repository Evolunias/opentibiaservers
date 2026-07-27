import LowExpGuideArgentinaKeywordPage, { generateMetadata } from './low-exp-guide-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpGuideArgentinaKeywordPage />;
}
