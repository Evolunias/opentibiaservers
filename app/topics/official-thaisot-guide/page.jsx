import OfficialThaisotGuideKeywordPage, { generateMetadata } from './official-thaisot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThaisotGuideKeywordPage />;
}
