import UnlineUptimeKeywordPage, { generateMetadata } from './unline-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineUptimeKeywordPage />;
}
