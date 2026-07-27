import OpenTibiaServersScreenshotsKeywordPage, { generateMetadata } from './open-tibia-servers-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersScreenshotsKeywordPage />;
}
