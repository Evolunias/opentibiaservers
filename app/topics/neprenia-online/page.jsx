import NepreniaOnlineKeywordPage, { generateMetadata } from './neprenia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaOnlineKeywordPage />;
}
