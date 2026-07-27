import OldSchoolXanteriaRulesKeywordPage, { generateMetadata } from './old-school-xanteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolXanteriaRulesKeywordPage />;
}
