import OldSchoolEvoluniaWebsiteKeywordPage, { generateMetadata } from './old-school-evolunia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoluniaWebsiteKeywordPage />;
}
