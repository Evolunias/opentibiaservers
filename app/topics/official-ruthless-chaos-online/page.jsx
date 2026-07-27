import OfficialRuthlessChaosOnlineKeywordPage, { generateMetadata } from './official-ruthless-chaos-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRuthlessChaosOnlineKeywordPage />;
}
