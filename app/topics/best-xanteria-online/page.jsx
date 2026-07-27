import BestXanteriaOnlineKeywordPage, { generateMetadata } from './best-xanteria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestXanteriaOnlineKeywordPage />;
}
