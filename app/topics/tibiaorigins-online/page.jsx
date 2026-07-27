import TibiaoriginsOnlineKeywordPage, { generateMetadata } from './tibiaorigins-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsOnlineKeywordPage />;
}
