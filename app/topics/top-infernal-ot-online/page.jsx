import TopInfernalOtOnlineKeywordPage, { generateMetadata } from './top-infernal-ot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopInfernalOtOnlineKeywordPage />;
}
