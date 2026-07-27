import OldSchoolNoxiousotLoginKeywordPage, { generateMetadata } from './old-school-noxiousot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNoxiousotLoginKeywordPage />;
}
