import OldSchoolCyntaraLoginKeywordPage, { generateMetadata } from './old-school-cyntara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCyntaraLoginKeywordPage />;
}
