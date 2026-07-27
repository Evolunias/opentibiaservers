import OldSchoolCyntaraServerKeywordPage, { generateMetadata } from './old-school-cyntara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCyntaraServerKeywordPage />;
}
