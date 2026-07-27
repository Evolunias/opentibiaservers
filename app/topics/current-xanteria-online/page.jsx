import CurrentXanteriaOnlineKeywordPage, { generateMetadata } from './current-xanteria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentXanteriaOnlineKeywordPage />;
}
