import LowrateTrashformersDownloadKeywordPage, { generateMetadata } from './lowrate-trashformers-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTrashformersDownloadKeywordPage />;
}
