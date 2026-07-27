import TibianusUptimeKeywordPage, { generateMetadata } from './tibianus-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusUptimeKeywordPage />;
}
