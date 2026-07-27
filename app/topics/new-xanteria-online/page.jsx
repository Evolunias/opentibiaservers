import NewXanteriaOnlineKeywordPage, { generateMetadata } from './new-xanteria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewXanteriaOnlineKeywordPage />;
}
