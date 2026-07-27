import OpenTibiaServerListUptimeKeywordPage, { generateMetadata } from './open-tibia-server-list-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServerListUptimeKeywordPage />;
}
