import OldSchoolCyntaraWebsiteKeywordPage, { generateMetadata } from './old-school-cyntara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCyntaraWebsiteKeywordPage />;
}
