import OldSchoolElderaTibiaKeywordPage, { generateMetadata } from './old-school-eldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolElderaTibiaKeywordPage />;
}
