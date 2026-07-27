import CurrentNoxiousotDownloadKeywordPage, { generateMetadata } from './current-noxiousot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNoxiousotDownloadKeywordPage />;
}
