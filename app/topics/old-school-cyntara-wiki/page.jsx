import OldSchoolCyntaraWikiKeywordPage, { generateMetadata } from './old-school-cyntara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCyntaraWikiKeywordPage />;
}
