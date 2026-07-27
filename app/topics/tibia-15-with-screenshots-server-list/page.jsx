import Tibia15WithScreenshotsServerListKeywordPage, { generateMetadata } from './tibia-15-with-screenshots-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithScreenshotsServerListKeywordPage />;
}
