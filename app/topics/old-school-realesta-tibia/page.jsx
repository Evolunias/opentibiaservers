import OldSchoolRealestaTibiaKeywordPage, { generateMetadata } from './old-school-realesta-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealestaTibiaKeywordPage />;
}
