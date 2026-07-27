import OldSchoolNtoStarOtKeywordPage, { generateMetadata } from './old-school-nto-star-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNtoStarOtKeywordPage />;
}
