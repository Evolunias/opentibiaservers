import BestSerenityOnlineKeywordPage, { generateMetadata } from './best-serenity-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSerenityOnlineKeywordPage />;
}
