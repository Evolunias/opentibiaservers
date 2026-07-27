import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-aurera-global-ots');
}

export default function CurrentAureraGlobalOtsKeywordPage() {
  return <StaticKeywordPage slug="current-aurera-global-ots" />;
}
