import PvpeServerScreenshotsKeywordPage, { generateMetadata } from './pvpe-server-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerScreenshotsKeywordPage />;
}
