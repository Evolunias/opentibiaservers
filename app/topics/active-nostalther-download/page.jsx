import ActiveNostaltherDownloadKeywordPage, { generateMetadata } from './active-nostalther-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNostaltherDownloadKeywordPage />;
}
