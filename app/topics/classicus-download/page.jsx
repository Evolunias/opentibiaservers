import ClassicusDownloadKeywordPage, { generateMetadata } from './classicus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusDownloadKeywordPage />;
}
