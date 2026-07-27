import TibiaCustomServerScreenshotsKeywordPage, { generateMetadata } from './tibia-custom-server-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaCustomServerScreenshotsKeywordPage />;
}
