import OldSchoolAureraGlobalWebsiteKeywordPage, { generateMetadata } from './old-school-aurera-global-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAureraGlobalWebsiteKeywordPage />;
}
