import CustomTibiaoriginsOnlineKeywordPage, { generateMetadata } from './custom-tibiaorigins-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaoriginsOnlineKeywordPage />;
}
