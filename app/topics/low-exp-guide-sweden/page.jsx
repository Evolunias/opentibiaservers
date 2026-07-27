import LowExpGuideSwedenKeywordPage, { generateMetadata } from './low-exp-guide-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpGuideSwedenKeywordPage />;
}
