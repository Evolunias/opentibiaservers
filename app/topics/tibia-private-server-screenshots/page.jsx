import TibiaPrivateServerScreenshotsKeywordPage, { generateMetadata } from './tibia-private-server-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPrivateServerScreenshotsKeywordPage />;
}
