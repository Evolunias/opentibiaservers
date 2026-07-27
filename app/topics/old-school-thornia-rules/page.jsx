import OldSchoolThorniaRulesKeywordPage, { generateMetadata } from './old-school-thornia-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThorniaRulesKeywordPage />;
}
