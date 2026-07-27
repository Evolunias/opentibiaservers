import LowrateXanteriaDownloadKeywordPage, { generateMetadata } from './lowrate-xanteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateXanteriaDownloadKeywordPage />;
}
