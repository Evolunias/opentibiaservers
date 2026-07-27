import TopRangerSArcaniWebsiteKeywordPage, { generateMetadata } from './top-ranger-s-arcani-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRangerSArcaniWebsiteKeywordPage />;
}
