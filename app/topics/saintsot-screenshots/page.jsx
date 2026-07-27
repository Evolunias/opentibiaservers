import SaintsotScreenshotsKeywordPage, { generateMetadata } from './saintsot-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotScreenshotsKeywordPage />;
}
