import LowrateTibiantisOnlineKeywordPage, { generateMetadata } from './lowrate-tibiantis-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiantisOnlineKeywordPage />;
}
