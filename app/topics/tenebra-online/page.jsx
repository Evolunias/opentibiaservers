import TenebraOnlineKeywordPage, { generateMetadata } from './tenebra-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TenebraOnlineKeywordPage />;
}
