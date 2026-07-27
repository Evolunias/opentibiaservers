import PopularUnlineKeywordPage, { generateMetadata } from './popular-unline';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularUnlineKeywordPage />;
}
