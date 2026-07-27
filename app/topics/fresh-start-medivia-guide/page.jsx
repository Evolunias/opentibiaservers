import FreshStartMediviaGuideKeywordPage, { generateMetadata } from './fresh-start-medivia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMediviaGuideKeywordPage />;
}
