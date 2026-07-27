import OldSchoolMidhemOnlineKeywordPage, { generateMetadata } from './old-school-midhem-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMidhemOnlineKeywordPage />;
}
