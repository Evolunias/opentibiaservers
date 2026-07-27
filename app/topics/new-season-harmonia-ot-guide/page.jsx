import NewSeasonHarmoniaOtGuideKeywordPage, { generateMetadata } from './new-season-harmonia-ot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonHarmoniaOtGuideKeywordPage />;
}
