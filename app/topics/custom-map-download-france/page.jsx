import CustomMapDownloadFranceKeywordPage, { generateMetadata } from './custom-map-download-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapDownloadFranceKeywordPage />;
}
