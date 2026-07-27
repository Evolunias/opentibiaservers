import CanobUptimeKeywordPage, { generateMetadata } from './canob-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobUptimeKeywordPage />;
}
