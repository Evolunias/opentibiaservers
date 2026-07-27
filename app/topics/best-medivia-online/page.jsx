import BestMediviaOnlineKeywordPage, { generateMetadata } from './best-medivia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMediviaOnlineKeywordPage />;
}
