import CarlinotDownloadKeywordPage, { generateMetadata } from './carlinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotDownloadKeywordPage />;
}
