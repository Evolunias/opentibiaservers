import SeasonalGuideMexicoKeywordPage, { generateMetadata } from './seasonal-guide-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalGuideMexicoKeywordPage />;
}
