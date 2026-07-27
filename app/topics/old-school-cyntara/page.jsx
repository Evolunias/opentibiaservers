import OldSchoolCyntaraKeywordPage, { generateMetadata } from './old-school-cyntara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCyntaraKeywordPage />;
}
