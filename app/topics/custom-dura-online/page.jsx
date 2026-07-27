import CustomDuraOnlineKeywordPage, { generateMetadata } from './custom-dura-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDuraOnlineKeywordPage />;
}
