import MyaacDownloadKeywordPage, { generateMetadata } from './myaac-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MyaacDownloadKeywordPage />;
}
