import CurrentRangerSArcaniWebsiteKeywordPage, { generateMetadata } from './current-ranger-s-arcani-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRangerSArcaniWebsiteKeywordPage />;
}
