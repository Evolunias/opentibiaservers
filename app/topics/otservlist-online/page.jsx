import OtservlistOnlineKeywordPage, { generateMetadata } from './otservlist-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistOnlineKeywordPage />;
}
