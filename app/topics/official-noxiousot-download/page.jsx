import OfficialNoxiousotDownloadKeywordPage, { generateMetadata } from './official-noxiousot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNoxiousotDownloadKeywordPage />;
}
