import OldSchoolNoxiousotRulesKeywordPage, { generateMetadata } from './old-school-noxiousot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNoxiousotRulesKeywordPage />;
}
