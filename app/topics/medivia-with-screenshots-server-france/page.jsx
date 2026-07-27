import MediviaWithScreenshotsServerFranceKeywordPage, { generateMetadata } from './medivia-with-screenshots-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaWithScreenshotsServerFranceKeywordPage />;
}
