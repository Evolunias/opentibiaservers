import ArcaniarlScreenshotsKeywordPage, { generateMetadata } from './arcaniarl-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlScreenshotsKeywordPage />;
}
