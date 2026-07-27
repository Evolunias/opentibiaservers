import HarmoniaOtOnlineKeywordPage, { generateMetadata } from './harmonia-ot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtOnlineKeywordPage />;
}
