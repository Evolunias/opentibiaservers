import ClassickDrakoriaScreenshotsKeywordPage, { generateMetadata } from './classick-drakoria-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaScreenshotsKeywordPage />;
}
