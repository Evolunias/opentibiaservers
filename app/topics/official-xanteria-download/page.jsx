import OfficialXanteriaDownloadKeywordPage, { generateMetadata } from './official-xanteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialXanteriaDownloadKeywordPage />;
}
