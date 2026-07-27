import OldSchoolElderaRulesKeywordPage, { generateMetadata } from './old-school-eldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolElderaRulesKeywordPage />;
}
