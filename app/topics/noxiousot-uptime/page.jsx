import NoxiousotUptimeKeywordPage, { generateMetadata } from './noxiousot-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotUptimeKeywordPage />;
}
