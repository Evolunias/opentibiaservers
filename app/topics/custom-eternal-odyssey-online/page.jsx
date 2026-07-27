import CustomEternalOdysseyOnlineKeywordPage, { generateMetadata } from './custom-eternal-odyssey-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEternalOdysseyOnlineKeywordPage />;
}
