import OldSchoolZezeniaOnlineRulesKeywordPage, { generateMetadata } from './old-school-zezenia-online-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolZezeniaOnlineRulesKeywordPage />;
}
