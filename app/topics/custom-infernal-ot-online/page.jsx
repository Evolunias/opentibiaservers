import CustomInfernalOtOnlineKeywordPage, { generateMetadata } from './custom-infernal-ot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomInfernalOtOnlineKeywordPage />;
}
