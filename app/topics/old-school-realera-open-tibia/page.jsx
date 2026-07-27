import OldSchoolRealeraOpenTibiaKeywordPage, { generateMetadata } from './old-school-realera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealeraOpenTibiaKeywordPage />;
}
