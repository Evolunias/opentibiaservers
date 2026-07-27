import Serenity11WithScreenshotsServerKeywordPage, { generateMetadata } from './serenity-11-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity11WithScreenshotsServerKeywordPage />;
}
