import TopNoxiousotDownloadKeywordPage, { generateMetadata } from './top-noxiousot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNoxiousotDownloadKeywordPage />;
}
