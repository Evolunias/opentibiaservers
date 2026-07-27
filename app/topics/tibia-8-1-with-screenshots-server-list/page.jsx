import Tibia81WithScreenshotsServerListKeywordPage, { generateMetadata } from './tibia-8-1-with-screenshots-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithScreenshotsServerListKeywordPage />;
}
