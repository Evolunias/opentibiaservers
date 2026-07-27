import OldSchoolTibijkaOnlineKeywordPage, { generateMetadata } from './old-school-tibijka-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibijkaOnlineKeywordPage />;
}
