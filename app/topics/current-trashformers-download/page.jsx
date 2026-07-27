import CurrentTrashformersDownloadKeywordPage, { generateMetadata } from './current-trashformers-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTrashformersDownloadKeywordPage />;
}
