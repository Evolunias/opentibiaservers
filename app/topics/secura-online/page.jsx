import SecuraOnlineKeywordPage, { generateMetadata } from './secura-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SecuraOnlineKeywordPage />;
}
