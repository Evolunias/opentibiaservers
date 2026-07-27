import PopularCoxaotDownloadKeywordPage, { generateMetadata } from './popular-coxaot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCoxaotDownloadKeywordPage />;
}
