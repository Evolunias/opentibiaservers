import CustomArcaniarlOnlineKeywordPage, { generateMetadata } from './custom-arcaniarl-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArcaniarlOnlineKeywordPage />;
}
