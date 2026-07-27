import OldSchoolOlderaTibiaKeywordPage, { generateMetadata } from './old-school-oldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOlderaTibiaKeywordPage />;
}
