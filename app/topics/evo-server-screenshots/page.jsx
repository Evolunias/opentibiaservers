import EvoServerScreenshotsKeywordPage, { generateMetadata } from './evo-server-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerScreenshotsKeywordPage />;
}
