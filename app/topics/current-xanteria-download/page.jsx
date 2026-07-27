import CurrentXanteriaDownloadKeywordPage, { generateMetadata } from './current-xanteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentXanteriaDownloadKeywordPage />;
}
