import SeasonalGuideArgentinaKeywordPage, { generateMetadata } from './seasonal-guide-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalGuideArgentinaKeywordPage />;
}
