import CustomClassicusOnlineKeywordPage, { generateMetadata } from './custom-classicus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomClassicusOnlineKeywordPage />;
}
