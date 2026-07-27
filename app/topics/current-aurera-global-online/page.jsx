import CurrentAureraGlobalOnlineKeywordPage, { generateMetadata } from './current-aurera-global-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAureraGlobalOnlineKeywordPage />;
}
