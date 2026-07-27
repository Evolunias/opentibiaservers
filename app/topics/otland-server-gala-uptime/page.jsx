import OtlandServerGalaUptimeKeywordPage, { generateMetadata } from './otland-server-gala-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandServerGalaUptimeKeywordPage />;
}
