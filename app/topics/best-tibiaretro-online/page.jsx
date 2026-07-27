import BestTibiaretroOnlineKeywordPage, { generateMetadata } from './best-tibiaretro-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaretroOnlineKeywordPage />;
}
