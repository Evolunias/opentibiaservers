import EvoDownloadMexicoKeywordPage, { generateMetadata } from './evo-download-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoDownloadMexicoKeywordPage />;
}
