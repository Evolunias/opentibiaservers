import CurrentInfernalOtDownloadKeywordPage, { generateMetadata } from './current-infernal-ot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentInfernalOtDownloadKeywordPage />;
}
