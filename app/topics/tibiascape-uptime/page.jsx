import TibiascapeUptimeKeywordPage, { generateMetadata } from './tibiascape-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeUptimeKeywordPage />;
}
