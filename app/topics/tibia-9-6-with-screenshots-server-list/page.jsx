import Tibia96WithScreenshotsServerListKeywordPage, { generateMetadata } from './tibia-9-6-with-screenshots-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithScreenshotsServerListKeywordPage />;
}
