import NoResetLumineraDownloadKeywordPage, { generateMetadata } from './no-reset-luminera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetLumineraDownloadKeywordPage />;
}
