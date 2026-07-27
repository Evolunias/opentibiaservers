import ActiveMistOfDeathOnlineKeywordPage, { generateMetadata } from './active-mist-of-death-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMistOfDeathOnlineKeywordPage />;
}
