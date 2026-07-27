import OldSchoolDemolidoresTibiaKeywordPage, { generateMetadata } from './old-school-demolidores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDemolidoresTibiaKeywordPage />;
}
