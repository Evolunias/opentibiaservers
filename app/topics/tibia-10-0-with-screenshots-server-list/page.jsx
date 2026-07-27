import Tibia100WithScreenshotsServerListKeywordPage, { generateMetadata } from './tibia-10-0-with-screenshots-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithScreenshotsServerListKeywordPage />;
}
