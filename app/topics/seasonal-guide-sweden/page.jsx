import SeasonalGuideSwedenKeywordPage, { generateMetadata } from './seasonal-guide-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalGuideSwedenKeywordPage />;
}
