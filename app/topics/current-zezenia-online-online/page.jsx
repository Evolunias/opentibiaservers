import CurrentZezeniaOnlineOnlineKeywordPage, { generateMetadata } from './current-zezenia-online-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentZezeniaOnlineOnlineKeywordPage />;
}
