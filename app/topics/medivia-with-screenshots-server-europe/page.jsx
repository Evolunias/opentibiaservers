import MediviaWithScreenshotsServerEuropeKeywordPage, { generateMetadata } from './medivia-with-screenshots-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaWithScreenshotsServerEuropeKeywordPage />;
}
