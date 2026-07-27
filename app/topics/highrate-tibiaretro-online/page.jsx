import HighrateTibiaretroOnlineKeywordPage, { generateMetadata } from './highrate-tibiaretro-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaretroOnlineKeywordPage />;
}
