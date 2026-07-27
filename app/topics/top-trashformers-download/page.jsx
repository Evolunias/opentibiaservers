import TopTrashformersDownloadKeywordPage, { generateMetadata } from './top-trashformers-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTrashformersDownloadKeywordPage />;
}
