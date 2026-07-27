import TopNostaltherDownloadKeywordPage, { generateMetadata } from './top-nostalther-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNostaltherDownloadKeywordPage />;
}
