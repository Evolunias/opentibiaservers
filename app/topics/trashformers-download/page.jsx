import TrashformersDownloadKeywordPage, { generateMetadata } from './trashformers-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersDownloadKeywordPage />;
}
