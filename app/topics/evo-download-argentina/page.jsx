import EvoDownloadArgentinaKeywordPage, { generateMetadata } from './evo-download-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoDownloadArgentinaKeywordPage />;
}
