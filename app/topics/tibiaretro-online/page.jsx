import TibiaretroOnlineKeywordPage, { generateMetadata } from './tibiaretro-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroOnlineKeywordPage />;
}
