import FreshStartMediviaWebsiteKeywordPage, { generateMetadata } from './fresh-start-medivia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMediviaWebsiteKeywordPage />;
}
