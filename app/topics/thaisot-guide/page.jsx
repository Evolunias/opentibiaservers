import ThaisotGuideKeywordPage, { generateMetadata } from './thaisot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotGuideKeywordPage />;
}
