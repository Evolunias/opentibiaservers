import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-evo-server-europe');
}

export default function OriginaltibiaEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-evo-server-europe" />;
}
