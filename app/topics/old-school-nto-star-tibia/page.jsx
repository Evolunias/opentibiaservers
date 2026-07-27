import OldSchoolNtoStarTibiaKeywordPage, { generateMetadata } from './old-school-nto-star-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNtoStarTibiaKeywordPage />;
}
