import BestClassicusOnlineKeywordPage, { generateMetadata } from './best-classicus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestClassicusOnlineKeywordPage />;
}
