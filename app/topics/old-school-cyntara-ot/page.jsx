import OldSchoolCyntaraOtKeywordPage, { generateMetadata } from './old-school-cyntara-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCyntaraOtKeywordPage />;
}
