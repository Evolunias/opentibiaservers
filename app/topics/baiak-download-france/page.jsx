import BaiakDownloadFranceKeywordPage, { generateMetadata } from './baiak-download-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakDownloadFranceKeywordPage />;
}
