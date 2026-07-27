import NewDuraOnlineKeywordPage, { generateMetadata } from './new-dura-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDuraOnlineKeywordPage />;
}
