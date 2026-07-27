import Tibia86WithScreenshotsServerListKeywordPage, { generateMetadata } from './tibia-8-6-with-screenshots-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithScreenshotsServerListKeywordPage />;
}
