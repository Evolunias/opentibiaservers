import OldSchoolNtoStarKeywordPage, { generateMetadata } from './old-school-nto-star';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNtoStarKeywordPage />;
}
