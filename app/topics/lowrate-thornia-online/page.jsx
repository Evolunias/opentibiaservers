import LowrateThorniaOnlineKeywordPage, { generateMetadata } from './lowrate-thornia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThorniaOnlineKeywordPage />;
}
