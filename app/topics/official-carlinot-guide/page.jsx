import OfficialCarlinotGuideKeywordPage, { generateMetadata } from './official-carlinot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCarlinotGuideKeywordPage />;
}
