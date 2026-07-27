import OldSchoolNoxiousotServerKeywordPage, { generateMetadata } from './old-school-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNoxiousotServerKeywordPage />;
}
