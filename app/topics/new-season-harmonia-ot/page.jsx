import NewSeasonHarmoniaOtKeywordPage, { generateMetadata } from './new-season-harmonia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonHarmoniaOtKeywordPage />;
}
