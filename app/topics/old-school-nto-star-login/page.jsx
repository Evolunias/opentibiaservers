import OldSchoolNtoStarLoginKeywordPage, { generateMetadata } from './old-school-nto-star-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNtoStarLoginKeywordPage />;
}
