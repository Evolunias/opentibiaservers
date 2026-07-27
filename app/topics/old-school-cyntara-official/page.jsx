import OldSchoolCyntaraOfficialKeywordPage, { generateMetadata } from './old-school-cyntara-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCyntaraOfficialKeywordPage />;
}
