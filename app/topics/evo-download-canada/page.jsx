import EvoDownloadCanadaKeywordPage, { generateMetadata } from './evo-download-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoDownloadCanadaKeywordPage />;
}
