import CustomMediviaOnlineKeywordPage, { generateMetadata } from './custom-medivia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMediviaOnlineKeywordPage />;
}
