import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-evo-server-north-america');
}

export default function OxygenotEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-evo-server-north-america" />;
}
