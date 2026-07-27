import ShadowcoresScreenshotsKeywordPage, { generateMetadata } from './shadowcores-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresScreenshotsKeywordPage />;
}
