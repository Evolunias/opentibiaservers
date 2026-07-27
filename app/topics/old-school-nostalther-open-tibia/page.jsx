import OldSchoolNostaltherOpenTibiaKeywordPage, { generateMetadata } from './old-school-nostalther-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNostaltherOpenTibiaKeywordPage />;
}
