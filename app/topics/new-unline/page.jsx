import NewUnlineKeywordPage, { generateMetadata } from './new-unline';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewUnlineKeywordPage />;
}
