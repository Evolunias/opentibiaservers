import OldSchoolTibijkaTibiaKeywordPage, { generateMetadata } from './old-school-tibijka-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibijkaTibiaKeywordPage />;
}
