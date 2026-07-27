import UnlineKeywordPage, { generateMetadata } from './unline';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineKeywordPage />;
}
