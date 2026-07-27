import NewTibiantisOnlineKeywordPage, { generateMetadata } from './new-tibiantis-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiantisOnlineKeywordPage />;
}
