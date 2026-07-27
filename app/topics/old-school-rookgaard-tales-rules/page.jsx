import OldSchoolRookgaardTalesRulesKeywordPage, { generateMetadata } from './old-school-rookgaard-tales-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRookgaardTalesRulesKeywordPage />;
}
