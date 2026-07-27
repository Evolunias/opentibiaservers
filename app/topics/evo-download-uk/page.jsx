import EvoDownloadUkKeywordPage, { generateMetadata } from './evo-download-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoDownloadUkKeywordPage />;
}
