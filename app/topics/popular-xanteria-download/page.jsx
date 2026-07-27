import PopularXanteriaDownloadKeywordPage, { generateMetadata } from './popular-xanteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularXanteriaDownloadKeywordPage />;
}
