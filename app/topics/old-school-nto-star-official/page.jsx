import OldSchoolNtoStarOfficialKeywordPage, { generateMetadata } from './old-school-nto-star-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNtoStarOfficialKeywordPage />;
}
