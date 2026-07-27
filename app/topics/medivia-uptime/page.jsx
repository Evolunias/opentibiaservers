import MediviaUptimeKeywordPage, { generateMetadata } from './medivia-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaUptimeKeywordPage />;
}
