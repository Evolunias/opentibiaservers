import OldSchoolTibiaServerPolandKeywordPage, { generateMetadata } from './old-school-tibia-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaServerPolandKeywordPage />;
}
