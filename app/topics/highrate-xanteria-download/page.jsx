import HighrateXanteriaDownloadKeywordPage, { generateMetadata } from './highrate-xanteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateXanteriaDownloadKeywordPage />;
}
