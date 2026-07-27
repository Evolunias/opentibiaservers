import ActiveXanteriaDownloadKeywordPage, { generateMetadata } from './active-xanteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveXanteriaDownloadKeywordPage />;
}
