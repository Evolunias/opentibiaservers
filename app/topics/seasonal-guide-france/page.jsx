import SeasonalGuideFranceKeywordPage, { generateMetadata } from './seasonal-guide-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalGuideFranceKeywordPage />;
}
