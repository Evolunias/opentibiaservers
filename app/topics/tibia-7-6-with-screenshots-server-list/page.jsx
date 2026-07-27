import Tibia76WithScreenshotsServerListKeywordPage, { generateMetadata } from './tibia-7-6-with-screenshots-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithScreenshotsServerListKeywordPage />;
}
