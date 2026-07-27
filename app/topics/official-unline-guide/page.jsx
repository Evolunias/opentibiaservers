import OfficialUnlineGuideKeywordPage, { generateMetadata } from './official-unline-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialUnlineGuideKeywordPage />;
}
