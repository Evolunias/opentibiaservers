import HighrateMediviaOnlineKeywordPage, { generateMetadata } from './highrate-medivia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMediviaOnlineKeywordPage />;
}
