import BestArcaniarlOnlineKeywordPage, { generateMetadata } from './best-arcaniarl-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArcaniarlOnlineKeywordPage />;
}
