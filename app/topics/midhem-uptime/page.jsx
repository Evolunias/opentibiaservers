import MidhemUptimeKeywordPage, { generateMetadata } from './midhem-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemUptimeKeywordPage />;
}
