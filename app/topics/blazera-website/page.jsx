import BlazeraWebsiteKeywordPage, { generateMetadata } from './blazera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraWebsiteKeywordPage />;
}
