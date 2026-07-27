import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-ot-server-north-america');
}

export default function EvoOtServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-ot-server-north-america" />;
}
