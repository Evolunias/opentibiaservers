import EterniaOnlineKeywordPage, { generateMetadata } from './eternia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EterniaOnlineKeywordPage />;
}
