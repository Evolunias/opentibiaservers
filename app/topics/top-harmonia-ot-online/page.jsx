import TopHarmoniaOtOnlineKeywordPage, { generateMetadata } from './top-harmonia-ot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopHarmoniaOtOnlineKeywordPage />;
}
