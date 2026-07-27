import LowrateTibijkaOnlineKeywordPage, { generateMetadata } from './lowrate-tibijka-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibijkaOnlineKeywordPage />;
}
