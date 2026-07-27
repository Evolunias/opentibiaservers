import CurrentClassicusOnlineKeywordPage, { generateMetadata } from './current-classicus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassicusOnlineKeywordPage />;
}
