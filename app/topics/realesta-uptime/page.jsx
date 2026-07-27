import RealestaUptimeKeywordPage, { generateMetadata } from './realesta-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaUptimeKeywordPage />;
}
