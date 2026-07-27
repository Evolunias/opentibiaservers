import OfficialClassickDrakoriaGuideKeywordPage, { generateMetadata } from './official-classick-drakoria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialClassickDrakoriaGuideKeywordPage />;
}
