import TopLumineraDownloadKeywordPage, { generateMetadata } from './top-luminera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopLumineraDownloadKeywordPage />;
}
