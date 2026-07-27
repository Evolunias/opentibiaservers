import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-client-argentina');
}

export default function EvoClientArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evo-client-argentina" />;
}
