import LuceraOnlineKeywordPage, { generateMetadata } from './lucera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LuceraOnlineKeywordPage />;
}
