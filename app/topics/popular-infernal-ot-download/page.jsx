import PopularInfernalOtDownloadKeywordPage, { generateMetadata } from './popular-infernal-ot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularInfernalOtDownloadKeywordPage />;
}
