import CustomRangerSArcaniWebsiteKeywordPage, { generateMetadata } from './custom-ranger-s-arcani-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRangerSArcaniWebsiteKeywordPage />;
}
