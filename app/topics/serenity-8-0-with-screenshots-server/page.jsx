import Serenity80WithScreenshotsServerKeywordPage, { generateMetadata } from './serenity-8-0-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity80WithScreenshotsServerKeywordPage />;
}
