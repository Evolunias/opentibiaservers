import ActiveAmeriaOnlineKeywordPage, { generateMetadata } from './active-ameria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAmeriaOnlineKeywordPage />;
}
