import PopularInfernalOtOnlineKeywordPage, { generateMetadata } from './popular-infernal-ot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularInfernalOtOnlineKeywordPage />;
}
