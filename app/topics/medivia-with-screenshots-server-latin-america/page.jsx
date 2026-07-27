import MediviaWithScreenshotsServerLatinAmericaKeywordPage, { generateMetadata } from './medivia-with-screenshots-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaWithScreenshotsServerLatinAmericaKeywordPage />;
}
