import HighrateUnlineKeywordPage, { generateMetadata } from './highrate-unline';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateUnlineKeywordPage />;
}
