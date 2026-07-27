import ActiveInfernalOtOnlineKeywordPage, { generateMetadata } from './active-infernal-ot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveInfernalOtOnlineKeywordPage />;
}
