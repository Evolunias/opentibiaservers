import OfficialEvoleraGuideKeywordPage, { generateMetadata } from './official-evolera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoleraGuideKeywordPage />;
}
