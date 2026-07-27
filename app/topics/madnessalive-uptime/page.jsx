import MadnessaliveUptimeKeywordPage, { generateMetadata } from './madnessalive-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveUptimeKeywordPage />;
}
