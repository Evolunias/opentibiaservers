import LowrateCoxaotDownloadKeywordPage, { generateMetadata } from './lowrate-coxaot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCoxaotDownloadKeywordPage />;
}
