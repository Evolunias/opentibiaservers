import RealMapNilotDownloadKeywordPage, { generateMetadata } from './real-map-nilot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNilotDownloadKeywordPage />;
}
