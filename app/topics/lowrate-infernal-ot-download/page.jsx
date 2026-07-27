import LowrateInfernalOtDownloadKeywordPage, { generateMetadata } from './lowrate-infernal-ot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateInfernalOtDownloadKeywordPage />;
}
