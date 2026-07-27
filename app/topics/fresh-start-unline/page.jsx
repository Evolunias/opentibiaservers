import FreshStartUnlineKeywordPage, { generateMetadata } from './fresh-start-unline';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartUnlineKeywordPage />;
}
