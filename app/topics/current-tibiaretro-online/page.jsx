import CurrentTibiaretroOnlineKeywordPage, { generateMetadata } from './current-tibiaretro-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaretroOnlineKeywordPage />;
}
