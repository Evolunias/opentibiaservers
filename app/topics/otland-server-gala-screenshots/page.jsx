import OtlandServerGalaScreenshotsKeywordPage, { generateMetadata } from './otland-server-gala-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandServerGalaScreenshotsKeywordPage />;
}
