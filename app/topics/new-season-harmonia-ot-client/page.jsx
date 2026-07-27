import NewSeasonHarmoniaOtClientKeywordPage, { generateMetadata } from './new-season-harmonia-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonHarmoniaOtClientKeywordPage />;
}
