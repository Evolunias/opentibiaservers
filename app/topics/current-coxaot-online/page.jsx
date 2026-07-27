import CurrentCoxaotOnlineKeywordPage, { generateMetadata } from './current-coxaot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCoxaotOnlineKeywordPage />;
}
