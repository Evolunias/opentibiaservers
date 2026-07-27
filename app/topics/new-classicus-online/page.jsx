import NewClassicusOnlineKeywordPage, { generateMetadata } from './new-classicus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewClassicusOnlineKeywordPage />;
}
