import PopularTrashformersDownloadKeywordPage, { generateMetadata } from './popular-trashformers-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTrashformersDownloadKeywordPage />;
}
