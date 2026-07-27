import ThorniaOnlineKeywordPage, { generateMetadata } from './thornia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaOnlineKeywordPage />;
}
