import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-aurera-global');
}

export default function CurrentAureraGlobalKeywordPage() {
  return <StaticKeywordPage slug="current-aurera-global" />;
}
