import OfficialHarmoniaOtOnlineKeywordPage, { generateMetadata } from './official-harmonia-ot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialHarmoniaOtOnlineKeywordPage />;
}
