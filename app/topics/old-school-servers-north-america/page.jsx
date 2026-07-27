import OldSchoolServersNorthAmericaKeywordPage, { generateMetadata } from './old-school-servers-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolServersNorthAmericaKeywordPage />;
}
