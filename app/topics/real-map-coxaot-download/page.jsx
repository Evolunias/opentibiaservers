import RealMapCoxaotDownloadKeywordPage, { generateMetadata } from './real-map-coxaot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCoxaotDownloadKeywordPage />;
}
