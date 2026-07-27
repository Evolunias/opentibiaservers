import EvoServerDownloadKeywordPage, { generateMetadata } from './evo-server-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerDownloadKeywordPage />;
}
