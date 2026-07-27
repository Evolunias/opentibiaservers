import PopularNostaltherDownloadKeywordPage, { generateMetadata } from './popular-nostalther-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNostaltherDownloadKeywordPage />;
}
