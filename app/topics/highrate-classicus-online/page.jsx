import HighrateClassicusOnlineKeywordPage, { generateMetadata } from './highrate-classicus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateClassicusOnlineKeywordPage />;
}
