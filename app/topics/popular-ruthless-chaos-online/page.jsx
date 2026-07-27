import PopularRuthlessChaosOnlineKeywordPage, { generateMetadata } from './popular-ruthless-chaos-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRuthlessChaosOnlineKeywordPage />;
}
