import TopMiracleGuideKeywordPage, { generateMetadata } from './top-miracle-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMiracleGuideKeywordPage />;
}
