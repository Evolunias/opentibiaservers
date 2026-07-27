import OldSchoolNoxiousotOpenTibiaKeywordPage, { generateMetadata } from './old-school-noxiousot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNoxiousotOpenTibiaKeywordPage />;
}
