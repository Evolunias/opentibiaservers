import OfficialSaintsotGuideKeywordPage, { generateMetadata } from './official-saintsot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSaintsotGuideKeywordPage />;
}
