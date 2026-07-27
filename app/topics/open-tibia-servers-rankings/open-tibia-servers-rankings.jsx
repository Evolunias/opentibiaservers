import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-rankings');
}

export default function OpenTibiaServersRankingsKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-rankings" />;
}
