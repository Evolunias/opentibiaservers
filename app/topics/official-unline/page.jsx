import OfficialUnlineKeywordPage, { generateMetadata } from './official-unline';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialUnlineKeywordPage />;
}
