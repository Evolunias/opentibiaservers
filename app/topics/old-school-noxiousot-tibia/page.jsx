import OldSchoolNoxiousotTibiaKeywordPage, { generateMetadata } from './old-school-noxiousot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNoxiousotTibiaKeywordPage />;
}
