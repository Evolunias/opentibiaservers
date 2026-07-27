import OldSchoolTibiaPrivateServerUsaKeywordPage, { generateMetadata } from './old-school-tibia-private-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaPrivateServerUsaKeywordPage />;
}
