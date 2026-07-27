import OpenTibiaServersUptimeKeywordPage, { generateMetadata } from './open-tibia-servers-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersUptimeKeywordPage />;
}
