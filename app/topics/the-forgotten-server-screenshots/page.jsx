import TheForgottenServerScreenshotsKeywordPage, { generateMetadata } from './the-forgotten-server-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TheForgottenServerScreenshotsKeywordPage />;
}
