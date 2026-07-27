import TibiascapeScreenshotsKeywordPage, { generateMetadata } from './tibiascape-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeScreenshotsKeywordPage />;
}
