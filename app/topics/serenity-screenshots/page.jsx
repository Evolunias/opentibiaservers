import SerenityScreenshotsKeywordPage, { generateMetadata } from './serenity-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityScreenshotsKeywordPage />;
}
