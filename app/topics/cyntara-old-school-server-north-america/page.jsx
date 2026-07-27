import CyntaraOldSchoolServerNorthAmericaKeywordPage, { generateMetadata } from './cyntara-old-school-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CyntaraOldSchoolServerNorthAmericaKeywordPage />;
}
