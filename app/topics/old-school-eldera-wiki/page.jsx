import OldSchoolElderaWikiKeywordPage, { generateMetadata } from './old-school-eldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolElderaWikiKeywordPage />;
}
