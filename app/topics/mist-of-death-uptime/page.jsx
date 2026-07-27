import MistOfDeathUptimeKeywordPage, { generateMetadata } from './mist-of-death-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathUptimeKeywordPage />;
}
