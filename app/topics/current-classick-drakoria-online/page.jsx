import CurrentClassickDrakoriaOnlineKeywordPage, { generateMetadata } from './current-classick-drakoria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassickDrakoriaOnlineKeywordPage />;
}
