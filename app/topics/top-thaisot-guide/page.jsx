import TopThaisotGuideKeywordPage, { generateMetadata } from './top-thaisot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThaisotGuideKeywordPage />;
}
