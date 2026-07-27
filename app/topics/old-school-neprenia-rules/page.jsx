import OldSchoolNepreniaRulesKeywordPage, { generateMetadata } from './old-school-neprenia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNepreniaRulesKeywordPage />;
}
