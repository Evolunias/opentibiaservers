import OldSchoolNtoStarRulesKeywordPage, { generateMetadata } from './old-school-nto-star-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNtoStarRulesKeywordPage />;
}
