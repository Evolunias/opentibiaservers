import BestThorniaOnlineKeywordPage, { generateMetadata } from './best-thornia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThorniaOnlineKeywordPage />;
}
