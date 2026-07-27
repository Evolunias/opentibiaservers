import RealeraUptimeKeywordPage, { generateMetadata } from './realera-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraUptimeKeywordPage />;
}
