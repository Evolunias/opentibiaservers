import OldSchoolTibiaServerActiveKeywordPage, { generateMetadata } from './old-school-tibia-server-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaServerActiveKeywordPage />;
}
