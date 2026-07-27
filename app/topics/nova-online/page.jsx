import NovaOnlineKeywordPage, { generateMetadata } from './nova-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NovaOnlineKeywordPage />;
}
