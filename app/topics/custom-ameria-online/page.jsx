import CustomAmeriaOnlineKeywordPage, { generateMetadata } from './custom-ameria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAmeriaOnlineKeywordPage />;
}
