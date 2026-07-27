import OldSchoolCoxaotWikiKeywordPage, { generateMetadata } from './old-school-coxaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCoxaotWikiKeywordPage />;
}
