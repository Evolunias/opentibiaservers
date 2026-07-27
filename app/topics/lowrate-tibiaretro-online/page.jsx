import LowrateTibiaretroOnlineKeywordPage, { generateMetadata } from './lowrate-tibiaretro-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaretroOnlineKeywordPage />;
}
