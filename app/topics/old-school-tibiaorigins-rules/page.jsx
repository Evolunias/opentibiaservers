import OldSchoolTibiaoriginsRulesKeywordPage, { generateMetadata } from './old-school-tibiaorigins-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaoriginsRulesKeywordPage />;
}
