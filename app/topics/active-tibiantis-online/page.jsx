import ActiveTibiantisOnlineKeywordPage, { generateMetadata } from './active-tibiantis-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiantisOnlineKeywordPage />;
}
