import Serenity15WithScreenshotsServerKeywordPage, { generateMetadata } from './serenity-15-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity15WithScreenshotsServerKeywordPage />;
}
