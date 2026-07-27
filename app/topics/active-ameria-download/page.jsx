import ActiveAmeriaDownloadKeywordPage, { generateMetadata } from './active-ameria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAmeriaDownloadKeywordPage />;
}
