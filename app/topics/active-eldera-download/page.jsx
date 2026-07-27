import ActiveElderaDownloadKeywordPage, { generateMetadata } from './active-eldera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveElderaDownloadKeywordPage />;
}
