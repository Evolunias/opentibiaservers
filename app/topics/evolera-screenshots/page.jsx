import EvoleraScreenshotsKeywordPage, { generateMetadata } from './evolera-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraScreenshotsKeywordPage />;
}
