import CustomNtoStarDownloadKeywordPage, { generateMetadata } from './custom-nto-star-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNtoStarDownloadKeywordPage />;
}
