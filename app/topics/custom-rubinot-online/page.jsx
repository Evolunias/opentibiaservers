import CustomRubinotOnlineKeywordPage, { generateMetadata } from './custom-rubinot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRubinotOnlineKeywordPage />;
}
