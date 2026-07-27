import CyntaraScreenshotsKeywordPage, { generateMetadata } from './cyntara-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraScreenshotsKeywordPage />;
}
