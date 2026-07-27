import TopUnlineGuideKeywordPage, { generateMetadata } from './top-unline-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopUnlineGuideKeywordPage />;
}
