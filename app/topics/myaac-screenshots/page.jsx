import MyaacScreenshotsKeywordPage, { generateMetadata } from './myaac-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MyaacScreenshotsKeywordPage />;
}
