import TfsServerUptimeKeywordPage, { generateMetadata } from './tfs-server-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TfsServerUptimeKeywordPage />;
}
