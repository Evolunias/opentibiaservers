import LowExpGuideLatinAmericaKeywordPage, { generateMetadata } from './low-exp-guide-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpGuideLatinAmericaKeywordPage />;
}
