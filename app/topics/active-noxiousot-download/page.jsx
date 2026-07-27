import ActiveNoxiousotDownloadKeywordPage, { generateMetadata } from './active-noxiousot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNoxiousotDownloadKeywordPage />;
}
