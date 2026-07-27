import CustomTibiantisDownloadKeywordPage, { generateMetadata } from './custom-tibiantis-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiantisDownloadKeywordPage />;
}
