import OldSchoolNoxiousotKeywordPage, { generateMetadata } from './old-school-noxiousot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNoxiousotKeywordPage />;
}
