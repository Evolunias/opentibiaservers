import PopularNoxiousotDownloadKeywordPage, { generateMetadata } from './popular-noxiousot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNoxiousotDownloadKeywordPage />;
}
