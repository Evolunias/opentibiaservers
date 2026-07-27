import InfernalOtOnlineKeywordPage, { generateMetadata } from './infernal-ot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtOnlineKeywordPage />;
}
