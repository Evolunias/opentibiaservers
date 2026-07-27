import CustomMadnessaliveOnlineKeywordPage, { generateMetadata } from './custom-madnessalive-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMadnessaliveOnlineKeywordPage />;
}
