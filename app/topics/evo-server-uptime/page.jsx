import EvoServerUptimeKeywordPage, { generateMetadata } from './evo-server-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerUptimeKeywordPage />;
}
