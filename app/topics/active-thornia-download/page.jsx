import ActiveThorniaDownloadKeywordPage, { generateMetadata } from './active-thornia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThorniaDownloadKeywordPage />;
}
