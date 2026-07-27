import NoResetLumineraOnlineKeywordPage, { generateMetadata } from './no-reset-luminera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetLumineraOnlineKeywordPage />;
}
