import TibiantisOnlineKeywordPage, { generateMetadata } from './tibiantis-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisOnlineKeywordPage />;
}
