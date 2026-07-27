import EvoDownloadLatinAmericaKeywordPage, { generateMetadata } from './evo-download-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoDownloadLatinAmericaKeywordPage />;
}
