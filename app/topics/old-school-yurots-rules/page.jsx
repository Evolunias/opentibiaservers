import OldSchoolYurotsRulesKeywordPage, { generateMetadata } from './old-school-yurots-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolYurotsRulesKeywordPage />;
}
