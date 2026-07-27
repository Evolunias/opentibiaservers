import OldSchoolNostaltherWikiKeywordPage, { generateMetadata } from './old-school-nostalther-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNostaltherWikiKeywordPage />;
}
