import LowrateThaisotGuideKeywordPage, { generateMetadata } from './lowrate-thaisot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThaisotGuideKeywordPage />;
}
