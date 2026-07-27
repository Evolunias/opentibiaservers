import OldSchoolTibiaPrivateServerPolandKeywordPage, { generateMetadata } from './old-school-tibia-private-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaPrivateServerPolandKeywordPage />;
}
