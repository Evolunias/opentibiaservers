import OldSchoolCyntaraRulesKeywordPage, { generateMetadata } from './old-school-cyntara-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCyntaraRulesKeywordPage />;
}
