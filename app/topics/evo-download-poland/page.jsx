import EvoDownloadPolandKeywordPage, { generateMetadata } from './evo-download-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoDownloadPolandKeywordPage />;
}
