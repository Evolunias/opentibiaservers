import CurrentNostaltherDownloadKeywordPage, { generateMetadata } from './current-nostalther-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNostaltherDownloadKeywordPage />;
}
