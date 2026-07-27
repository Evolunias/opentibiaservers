import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global');
}

export default function AureraGlobalKeywordPage() {
  return <StaticKeywordPage slug="aurera-global" />;
}
