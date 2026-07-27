import EternalOdysseyDownloadKeywordPage, { generateMetadata } from './eternal-odyssey-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyDownloadKeywordPage />;
}
