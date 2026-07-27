import OldSchoolLumineraOnlineKeywordPage, { generateMetadata } from './old-school-luminera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLumineraOnlineKeywordPage />;
}
