import RealMapSerenityDownloadKeywordPage, { generateMetadata } from './real-map-serenity-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSerenityDownloadKeywordPage />;
}
