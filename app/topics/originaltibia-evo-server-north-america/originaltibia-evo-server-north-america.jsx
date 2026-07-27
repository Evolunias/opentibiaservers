import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-evo-server-north-america');
}

export default function OriginaltibiaEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-evo-server-north-america" />;
}
