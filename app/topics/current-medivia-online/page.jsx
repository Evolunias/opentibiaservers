import CurrentMediviaOnlineKeywordPage, { generateMetadata } from './current-medivia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMediviaOnlineKeywordPage />;
}
