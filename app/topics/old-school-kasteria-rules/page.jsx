import OldSchoolKasteriaRulesKeywordPage, { generateMetadata } from './old-school-kasteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolKasteriaRulesKeywordPage />;
}
