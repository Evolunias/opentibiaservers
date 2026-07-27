import OldSchoolCyntaraOtsKeywordPage, { generateMetadata } from './old-school-cyntara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCyntaraOtsKeywordPage />;
}
