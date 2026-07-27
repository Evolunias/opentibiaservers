import LowExpDownloadFranceKeywordPage, { generateMetadata } from './low-exp-download-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpDownloadFranceKeywordPage />;
}
