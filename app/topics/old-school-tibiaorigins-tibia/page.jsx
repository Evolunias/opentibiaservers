import OldSchoolTibiaoriginsTibiaKeywordPage, { generateMetadata } from './old-school-tibiaorigins-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaoriginsTibiaKeywordPage />;
}
