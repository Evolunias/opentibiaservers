import ClassickDrakoriaDownloadKeywordPage, { generateMetadata } from './classick-drakoria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaDownloadKeywordPage />;
}
