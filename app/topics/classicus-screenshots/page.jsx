import ClassicusScreenshotsKeywordPage, { generateMetadata } from './classicus-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusScreenshotsKeywordPage />;
}
