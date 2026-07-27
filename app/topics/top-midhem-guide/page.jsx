import TopMidhemGuideKeywordPage, { generateMetadata } from './top-midhem-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMidhemGuideKeywordPage />;
}
