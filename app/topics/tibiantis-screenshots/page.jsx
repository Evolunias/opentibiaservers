import TibiantisScreenshotsKeywordPage, { generateMetadata } from './tibiantis-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisScreenshotsKeywordPage />;
}
