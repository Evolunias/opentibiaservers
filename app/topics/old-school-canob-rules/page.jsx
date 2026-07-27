import OldSchoolCanobRulesKeywordPage, { generateMetadata } from './old-school-canob-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCanobRulesKeywordPage />;
}
