import CustomUnlineOnlineKeywordPage, { generateMetadata } from './custom-unline-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomUnlineOnlineKeywordPage />;
}
