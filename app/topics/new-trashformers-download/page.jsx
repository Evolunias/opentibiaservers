import NewTrashformersDownloadKeywordPage, { generateMetadata } from './new-trashformers-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTrashformersDownloadKeywordPage />;
}
