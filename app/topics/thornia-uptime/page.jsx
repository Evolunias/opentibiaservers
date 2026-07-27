import ThorniaUptimeKeywordPage, { generateMetadata } from './thornia-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaUptimeKeywordPage />;
}
