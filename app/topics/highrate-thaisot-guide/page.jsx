import HighrateThaisotGuideKeywordPage, { generateMetadata } from './highrate-thaisot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThaisotGuideKeywordPage />;
}
