import OldSchoolAmeriaOpenTibiaKeywordPage, { generateMetadata } from './old-school-ameria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAmeriaOpenTibiaKeywordPage />;
}
