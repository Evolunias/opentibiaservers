import LowrateClassicusOnlineKeywordPage, { generateMetadata } from './lowrate-classicus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateClassicusOnlineKeywordPage />;
}
