import CustomInfernalOtDownloadKeywordPage, { generateMetadata } from './custom-infernal-ot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomInfernalOtDownloadKeywordPage />;
}
