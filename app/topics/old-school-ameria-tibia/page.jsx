import OldSchoolAmeriaTibiaKeywordPage, { generateMetadata } from './old-school-ameria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAmeriaTibiaKeywordPage />;
}
