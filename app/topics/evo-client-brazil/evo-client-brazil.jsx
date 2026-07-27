import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-client-brazil');
}

export default function EvoClientBrazilKeywordPage() {
  return <StaticKeywordPage slug="evo-client-brazil" />;
}
