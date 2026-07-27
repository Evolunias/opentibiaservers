import Serenity76WithScreenshotsServerKeywordPage, { generateMetadata } from './serenity-7-6-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity76WithScreenshotsServerKeywordPage />;
}
