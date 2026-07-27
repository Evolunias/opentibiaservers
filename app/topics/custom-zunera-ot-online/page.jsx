import CustomZuneraOtOnlineKeywordPage, { generateMetadata } from './custom-zunera-ot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomZuneraOtOnlineKeywordPage />;
}
