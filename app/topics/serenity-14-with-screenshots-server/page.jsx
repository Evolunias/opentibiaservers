import Serenity14WithScreenshotsServerKeywordPage, { generateMetadata } from './serenity-14-with-screenshots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity14WithScreenshotsServerKeywordPage />;
}
