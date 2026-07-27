import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-client-north-america');
}

export default function EvoClientNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-client-north-america" />;
}
