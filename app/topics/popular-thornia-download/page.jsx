import PopularThorniaDownloadKeywordPage, { generateMetadata } from './popular-thornia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThorniaDownloadKeywordPage />;
}
