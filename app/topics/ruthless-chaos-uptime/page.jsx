import RuthlessChaosUptimeKeywordPage, { generateMetadata } from './ruthless-chaos-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosUptimeKeywordPage />;
}
