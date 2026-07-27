import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-ot-server-brazil');
}

export default function EvoOtServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evo-ot-server-brazil" />;
}
