import PopularMediviaWebsiteKeywordPage, { generateMetadata } from './popular-medivia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMediviaWebsiteKeywordPage />;
}
