import NoResetThorniaOnlineKeywordPage, { generateMetadata } from './no-reset-thornia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThorniaOnlineKeywordPage />;
}
