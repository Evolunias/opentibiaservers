import BestCarlinotOnlineKeywordPage, { generateMetadata } from './best-carlinot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCarlinotOnlineKeywordPage />;
}
