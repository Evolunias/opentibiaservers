import TibiameScreenshotsKeywordPage, { generateMetadata } from './tibiame-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameScreenshotsKeywordPage />;
}
