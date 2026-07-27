import Serenity12WithScreenshotsServerKeywordPage, { generateMetadata } from './serenity-12-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity12WithScreenshotsServerKeywordPage />;
}
