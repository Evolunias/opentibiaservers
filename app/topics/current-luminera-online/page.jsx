import CurrentLumineraOnlineKeywordPage, { generateMetadata } from './current-luminera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentLumineraOnlineKeywordPage />;
}
