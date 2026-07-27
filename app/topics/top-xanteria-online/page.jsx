import TopXanteriaOnlineKeywordPage, { generateMetadata } from './top-xanteria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopXanteriaOnlineKeywordPage />;
}
