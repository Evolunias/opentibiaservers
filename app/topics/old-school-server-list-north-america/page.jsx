import OldSchoolServerListNorthAmericaKeywordPage, { generateMetadata } from './old-school-server-list-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolServerListNorthAmericaKeywordPage />;
}
