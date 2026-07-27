import CustomTibiantisOnlineKeywordPage, { generateMetadata } from './custom-tibiantis-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiantisOnlineKeywordPage />;
}
