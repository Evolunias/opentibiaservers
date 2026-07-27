import NewLumineraDownloadKeywordPage, { generateMetadata } from './new-luminera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewLumineraDownloadKeywordPage />;
}
