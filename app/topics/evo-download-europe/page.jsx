import EvoDownloadEuropeKeywordPage, { generateMetadata } from './evo-download-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoDownloadEuropeKeywordPage />;
}
