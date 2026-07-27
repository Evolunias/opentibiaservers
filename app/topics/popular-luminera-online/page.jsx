import PopularLumineraOnlineKeywordPage, { generateMetadata } from './popular-luminera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularLumineraOnlineKeywordPage />;
}
