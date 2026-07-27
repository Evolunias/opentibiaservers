import PopularMediviaOnlineKeywordPage, { generateMetadata } from './popular-medivia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMediviaOnlineKeywordPage />;
}
