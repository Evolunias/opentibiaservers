import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-rankings');
}

export default function OtServersRankingsKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-rankings" />;
}
