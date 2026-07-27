import OfficialTrashformersDownloadKeywordPage, { generateMetadata } from './official-trashformers-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTrashformersDownloadKeywordPage />;
}
