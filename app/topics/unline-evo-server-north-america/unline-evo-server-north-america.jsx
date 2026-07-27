import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-evo-server-north-america');
}

export default function UnlineEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-evo-server-north-america" />;
}
