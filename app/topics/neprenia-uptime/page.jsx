import NepreniaUptimeKeywordPage, { generateMetadata } from './neprenia-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaUptimeKeywordPage />;
}
