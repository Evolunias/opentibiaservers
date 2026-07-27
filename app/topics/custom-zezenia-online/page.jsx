import CustomZezeniaOnlineKeywordPage, { generateMetadata } from './custom-zezenia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomZezeniaOnlineKeywordPage />;
}
