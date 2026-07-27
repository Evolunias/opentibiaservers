import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-evo-server-uk');
}

export default function OriginaltibiaEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-evo-server-uk" />;
}
