import OldSchoolZezeniaOnlineKeywordPage, { generateMetadata } from './old-school-zezenia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolZezeniaOnlineKeywordPage />;
}
