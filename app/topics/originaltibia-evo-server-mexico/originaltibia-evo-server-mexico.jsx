import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-evo-server-mexico');
}

export default function OriginaltibiaEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-evo-server-mexico" />;
}
