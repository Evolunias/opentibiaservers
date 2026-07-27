import Tibia84WithScreenshotsServerListKeywordPage, { generateMetadata } from './tibia-8-4-with-screenshots-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithScreenshotsServerListKeywordPage />;
}
