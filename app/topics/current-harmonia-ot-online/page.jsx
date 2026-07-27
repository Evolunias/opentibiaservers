import CurrentHarmoniaOtOnlineKeywordPage, { generateMetadata } from './current-harmonia-ot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentHarmoniaOtOnlineKeywordPage />;
}
