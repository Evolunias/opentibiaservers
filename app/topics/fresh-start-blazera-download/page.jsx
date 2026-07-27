import FreshStartBlazeraDownloadKeywordPage, { generateMetadata } from './fresh-start-blazera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartBlazeraDownloadKeywordPage />;
}
