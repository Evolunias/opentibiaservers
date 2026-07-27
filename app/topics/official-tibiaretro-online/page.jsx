import OfficialTibiaretroOnlineKeywordPage, { generateMetadata } from './official-tibiaretro-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaretroOnlineKeywordPage />;
}
