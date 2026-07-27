import HighrateTrashformersDownloadKeywordPage, { generateMetadata } from './highrate-trashformers-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTrashformersDownloadKeywordPage />;
}
