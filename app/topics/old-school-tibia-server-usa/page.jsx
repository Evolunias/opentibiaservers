import OldSchoolTibiaServerUsaKeywordPage, { generateMetadata } from './old-school-tibia-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaServerUsaKeywordPage />;
}
