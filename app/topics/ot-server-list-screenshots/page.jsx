import OtServerListScreenshotsKeywordPage, { generateMetadata } from './ot-server-list-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServerListScreenshotsKeywordPage />;
}
