import CurrentZezeniaOnlineKeywordPage, { generateMetadata } from './current-zezenia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentZezeniaOnlineKeywordPage />;
}
