import OriginaltibiaScreenshotsKeywordPage, { generateMetadata } from './originaltibia-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaScreenshotsKeywordPage />;
}
