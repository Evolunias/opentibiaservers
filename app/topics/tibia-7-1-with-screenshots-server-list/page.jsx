import Tibia71WithScreenshotsServerListKeywordPage, { generateMetadata } from './tibia-7-1-with-screenshots-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithScreenshotsServerListKeywordPage />;
}
