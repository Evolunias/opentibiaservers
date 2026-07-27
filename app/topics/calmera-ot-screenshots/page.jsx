import CalmeraOtScreenshotsKeywordPage, { generateMetadata } from './calmera-ot-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraOtScreenshotsKeywordPage />;
}
