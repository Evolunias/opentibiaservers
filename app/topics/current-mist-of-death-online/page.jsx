import CurrentMistOfDeathOnlineKeywordPage, { generateMetadata } from './current-mist-of-death-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMistOfDeathOnlineKeywordPage />;
}
