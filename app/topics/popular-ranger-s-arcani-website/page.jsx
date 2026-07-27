import PopularRangerSArcaniWebsiteKeywordPage, { generateMetadata } from './popular-ranger-s-arcani-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRangerSArcaniWebsiteKeywordPage />;
}
