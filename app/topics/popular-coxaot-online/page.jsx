import PopularCoxaotOnlineKeywordPage, { generateMetadata } from './popular-coxaot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCoxaotOnlineKeywordPage />;
}
