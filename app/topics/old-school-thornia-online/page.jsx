import OldSchoolThorniaOnlineKeywordPage, { generateMetadata } from './old-school-thornia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThorniaOnlineKeywordPage />;
}
