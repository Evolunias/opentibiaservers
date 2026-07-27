import Tibia12WithScreenshotsServerListKeywordPage, { generateMetadata } from './tibia-12-with-screenshots-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithScreenshotsServerListKeywordPage />;
}
