import Serenity84WithScreenshotsServerKeywordPage, { generateMetadata } from './serenity-8-4-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity84WithScreenshotsServerKeywordPage />;
}
