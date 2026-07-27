import OldSchoolClassicusTibiaKeywordPage, { generateMetadata } from './old-school-classicus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassicusTibiaKeywordPage />;
}
