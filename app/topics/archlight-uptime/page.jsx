import ArchlightUptimeKeywordPage, { generateMetadata } from './archlight-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArchlightUptimeKeywordPage />;
}
