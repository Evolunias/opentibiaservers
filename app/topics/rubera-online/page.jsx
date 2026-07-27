import RuberaOnlineKeywordPage, { generateMetadata } from './rubera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuberaOnlineKeywordPage />;
}
