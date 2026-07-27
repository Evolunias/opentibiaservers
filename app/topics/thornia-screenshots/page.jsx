import ThorniaScreenshotsKeywordPage, { generateMetadata } from './thornia-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaScreenshotsKeywordPage />;
}
