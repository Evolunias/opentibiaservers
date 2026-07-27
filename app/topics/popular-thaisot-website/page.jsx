import PopularThaisotWebsiteKeywordPage, { generateMetadata } from './popular-thaisot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThaisotWebsiteKeywordPage />;
}
