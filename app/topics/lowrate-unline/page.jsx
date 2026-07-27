import LowrateUnlineKeywordPage, { generateMetadata } from './lowrate-unline';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateUnlineKeywordPage />;
}
