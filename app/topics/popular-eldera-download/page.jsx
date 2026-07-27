import PopularElderaDownloadKeywordPage, { generateMetadata } from './popular-eldera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularElderaDownloadKeywordPage />;
}
