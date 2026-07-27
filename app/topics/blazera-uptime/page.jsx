import BlazeraUptimeKeywordPage, { generateMetadata } from './blazera-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraUptimeKeywordPage />;
}
