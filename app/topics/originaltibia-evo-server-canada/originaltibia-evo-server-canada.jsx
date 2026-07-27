import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-evo-server-canada');
}

export default function OriginaltibiaEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-evo-server-canada" />;
}
