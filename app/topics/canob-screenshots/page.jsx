import CanobScreenshotsKeywordPage, { generateMetadata } from './canob-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobScreenshotsKeywordPage />;
}
