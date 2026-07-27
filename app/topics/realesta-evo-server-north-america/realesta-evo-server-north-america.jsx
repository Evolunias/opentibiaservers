import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-evo-server-north-america');
}

export default function RealestaEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-evo-server-north-america" />;
}
