import HarmoniaOtSeasonKeywordPage, { generateMetadata } from './harmonia-ot-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtSeasonKeywordPage />;
}
