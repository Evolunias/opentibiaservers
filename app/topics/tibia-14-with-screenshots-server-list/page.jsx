import Tibia14WithScreenshotsServerListKeywordPage, { generateMetadata } from './tibia-14-with-screenshots-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithScreenshotsServerListKeywordPage />;
}
