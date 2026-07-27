import CanobWithScreenshotsServerCanadaKeywordPage, { generateMetadata } from './canob-with-screenshots-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobWithScreenshotsServerCanadaKeywordPage />;
}
