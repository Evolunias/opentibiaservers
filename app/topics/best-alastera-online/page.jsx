import BestAlasteraOnlineKeywordPage, { generateMetadata } from './best-alastera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAlasteraOnlineKeywordPage />;
}
