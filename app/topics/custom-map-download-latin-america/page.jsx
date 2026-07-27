import CustomMapDownloadLatinAmericaKeywordPage, { generateMetadata } from './custom-map-download-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapDownloadLatinAmericaKeywordPage />;
}
