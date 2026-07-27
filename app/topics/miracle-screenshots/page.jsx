import MiracleScreenshotsKeywordPage, { generateMetadata } from './miracle-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleScreenshotsKeywordPage />;
}
