import CustomThaisotDownloadKeywordPage, { generateMetadata } from './custom-thaisot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomThaisotDownloadKeywordPage />;
}
