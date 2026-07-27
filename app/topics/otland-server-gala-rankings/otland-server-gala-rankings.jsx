import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-rankings');
}

export default function OtlandServerGalaRankingsKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-rankings" />;
}
