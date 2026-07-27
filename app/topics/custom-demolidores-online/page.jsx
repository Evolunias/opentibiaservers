import CustomDemolidoresOnlineKeywordPage, { generateMetadata } from './custom-demolidores-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDemolidoresOnlineKeywordPage />;
}
