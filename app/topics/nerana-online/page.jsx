import NeranaOnlineKeywordPage, { generateMetadata } from './nerana-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NeranaOnlineKeywordPage />;
}
