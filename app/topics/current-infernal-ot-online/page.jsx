import CurrentInfernalOtOnlineKeywordPage, { generateMetadata } from './current-infernal-ot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentInfernalOtOnlineKeywordPage />;
}
