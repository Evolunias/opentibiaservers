import RangerSArcaniScreenshotsKeywordPage, { generateMetadata } from './ranger-s-arcani-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniScreenshotsKeywordPage />;
}
