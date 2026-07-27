import OldSchoolCyntaraOtServerKeywordPage, { generateMetadata } from './old-school-cyntara-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCyntaraOtServerKeywordPage />;
}
