import Tibia13WithScreenshotsServerListKeywordPage, { generateMetadata } from './tibia-13-with-screenshots-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithScreenshotsServerListKeywordPage />;
}
