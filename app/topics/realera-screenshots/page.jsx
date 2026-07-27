import RealeraScreenshotsKeywordPage, { generateMetadata } from './realera-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraScreenshotsKeywordPage />;
}
