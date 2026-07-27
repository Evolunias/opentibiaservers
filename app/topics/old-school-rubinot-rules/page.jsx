import OldSchoolRubinotRulesKeywordPage, { generateMetadata } from './old-school-rubinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRubinotRulesKeywordPage />;
}
