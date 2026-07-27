import CustomRangerSArcaniWikiKeywordPage, { generateMetadata } from './custom-ranger-s-arcani-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRangerSArcaniWikiKeywordPage />;
}
