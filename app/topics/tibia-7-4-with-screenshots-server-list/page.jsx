import Tibia74WithScreenshotsServerListKeywordPage, { generateMetadata } from './tibia-7-4-with-screenshots-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithScreenshotsServerListKeywordPage />;
}
