import CustomYurotsOnlineKeywordPage, { generateMetadata } from './custom-yurots-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomYurotsOnlineKeywordPage />;
}
