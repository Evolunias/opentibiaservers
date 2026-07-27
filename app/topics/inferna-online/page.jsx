import InfernaOnlineKeywordPage, { generateMetadata } from './inferna-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernaOnlineKeywordPage />;
}
