import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-evo-server-north-america');
}

export default function RealeraEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-evo-server-north-america" />;
}
