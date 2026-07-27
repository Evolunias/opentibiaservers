import EvoDownloadBrazilKeywordPage, { generateMetadata } from './evo-download-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoDownloadBrazilKeywordPage />;
}
