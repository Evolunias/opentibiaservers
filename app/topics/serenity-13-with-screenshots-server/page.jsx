import Serenity13WithScreenshotsServerKeywordPage, { generateMetadata } from './serenity-13-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity13WithScreenshotsServerKeywordPage />;
}
