import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-evo-server-usa');
}

export default function OriginaltibiaEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-evo-server-usa" />;
}
