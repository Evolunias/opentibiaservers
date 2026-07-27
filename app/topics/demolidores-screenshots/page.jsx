import DemolidoresScreenshotsKeywordPage, { generateMetadata } from './demolidores-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresScreenshotsKeywordPage />;
}
