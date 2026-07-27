import OtmadnessUptimeKeywordPage, { generateMetadata } from './otmadness-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessUptimeKeywordPage />;
}
