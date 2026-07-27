import OfficialThorniaOnlineKeywordPage, { generateMetadata } from './official-thornia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThorniaOnlineKeywordPage />;
}
