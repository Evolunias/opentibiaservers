import OldSchoolCyntaraGuideKeywordPage, { generateMetadata } from './old-school-cyntara-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCyntaraGuideKeywordPage />;
}
