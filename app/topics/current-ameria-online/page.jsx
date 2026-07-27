import CurrentAmeriaOnlineKeywordPage, { generateMetadata } from './current-ameria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAmeriaOnlineKeywordPage />;
}
