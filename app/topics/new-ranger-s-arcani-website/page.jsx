import NewRangerSArcaniWebsiteKeywordPage, { generateMetadata } from './new-ranger-s-arcani-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRangerSArcaniWebsiteKeywordPage />;
}
