import Tibia80WithScreenshotsServerListKeywordPage, { generateMetadata } from './tibia-8-0-with-screenshots-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithScreenshotsServerListKeywordPage />;
}
