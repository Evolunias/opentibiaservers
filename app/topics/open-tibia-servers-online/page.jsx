import OpenTibiaServersOnlineKeywordPage, { generateMetadata } from './open-tibia-servers-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersOnlineKeywordPage />;
}
