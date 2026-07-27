import LumineraScreenshotsKeywordPage, { generateMetadata } from './luminera-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraScreenshotsKeywordPage />;
}
