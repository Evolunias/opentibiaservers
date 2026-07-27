import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-client-canada');
}

export default function EvoClientCanadaKeywordPage() {
  return <StaticKeywordPage slug="evo-client-canada" />;
}
