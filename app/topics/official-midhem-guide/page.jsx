import OfficialMidhemGuideKeywordPage, { generateMetadata } from './official-midhem-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMidhemGuideKeywordPage />;
}
