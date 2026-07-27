import ElderaScreenshotsKeywordPage, { generateMetadata } from './eldera-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaScreenshotsKeywordPage />;
}
