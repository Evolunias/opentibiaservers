import HarmoniaOtScreenshotsKeywordPage, { generateMetadata } from './harmonia-ot-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtScreenshotsKeywordPage />;
}
