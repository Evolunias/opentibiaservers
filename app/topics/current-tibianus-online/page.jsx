import CurrentTibianusOnlineKeywordPage, { generateMetadata } from './current-tibianus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibianusOnlineKeywordPage />;
}
