import Tibia11WithScreenshotsServerListKeywordPage, { generateMetadata } from './tibia-11-with-screenshots-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithScreenshotsServerListKeywordPage />;
}
