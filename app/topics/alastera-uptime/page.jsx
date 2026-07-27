import AlasteraUptimeKeywordPage, { generateMetadata } from './alastera-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraUptimeKeywordPage />;
}
