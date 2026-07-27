import LowrateNoxiousotDownloadKeywordPage, { generateMetadata } from './lowrate-noxiousot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNoxiousotDownloadKeywordPage />;
}
