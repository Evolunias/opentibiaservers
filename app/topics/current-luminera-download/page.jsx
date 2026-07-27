import CurrentLumineraDownloadKeywordPage, { generateMetadata } from './current-luminera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentLumineraDownloadKeywordPage />;
}
