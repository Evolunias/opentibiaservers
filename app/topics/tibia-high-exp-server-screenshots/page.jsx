import TibiaHighExpServerScreenshotsKeywordPage, { generateMetadata } from './tibia-high-exp-server-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaHighExpServerScreenshotsKeywordPage />;
}
