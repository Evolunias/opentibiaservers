import TfsServerScreenshotsKeywordPage, { generateMetadata } from './tfs-server-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TfsServerScreenshotsKeywordPage />;
}
