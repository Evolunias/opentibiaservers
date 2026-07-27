import ArcaniarlUptimeKeywordPage, { generateMetadata } from './arcaniarl-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlUptimeKeywordPage />;
}
