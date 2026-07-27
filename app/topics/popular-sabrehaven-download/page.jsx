import PopularSabrehavenDownloadKeywordPage, { generateMetadata } from './popular-sabrehaven-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSabrehavenDownloadKeywordPage />;
}
