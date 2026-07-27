import ActiveTrashformersDownloadKeywordPage, { generateMetadata } from './active-trashformers-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTrashformersDownloadKeywordPage />;
}
