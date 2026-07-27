import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-north-america');
}

export default function EvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-server-north-america" />;
}
