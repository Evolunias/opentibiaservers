import CurrentTibiantisOnlineKeywordPage, { generateMetadata } from './current-tibiantis-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiantisOnlineKeywordPage />;
}
