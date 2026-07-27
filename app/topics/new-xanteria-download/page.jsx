import NewXanteriaDownloadKeywordPage, { generateMetadata } from './new-xanteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewXanteriaDownloadKeywordPage />;
}
