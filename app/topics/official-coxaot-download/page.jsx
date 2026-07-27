import OfficialCoxaotDownloadKeywordPage, { generateMetadata } from './official-coxaot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCoxaotDownloadKeywordPage />;
}
