import NewThorniaDownloadKeywordPage, { generateMetadata } from './new-thornia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewThorniaDownloadKeywordPage />;
}
