import NewSeasonHarmoniaOtServerKeywordPage, { generateMetadata } from './new-season-harmonia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonHarmoniaOtServerKeywordPage />;
}
