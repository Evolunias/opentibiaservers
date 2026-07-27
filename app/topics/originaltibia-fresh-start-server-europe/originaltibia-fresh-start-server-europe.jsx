import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-fresh-start-server-europe');
}

export default function OriginaltibiaFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-fresh-start-server-europe" />;
}
