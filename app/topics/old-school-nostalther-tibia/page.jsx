import OldSchoolNostaltherTibiaKeywordPage, { generateMetadata } from './old-school-nostalther-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNostaltherTibiaKeywordPage />;
}
