import EternalOdysseyUptimeKeywordPage, { generateMetadata } from './eternal-odyssey-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyUptimeKeywordPage />;
}
