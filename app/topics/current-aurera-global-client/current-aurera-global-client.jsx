import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-aurera-global-client');
}

export default function CurrentAureraGlobalClientKeywordPage() {
  return <StaticKeywordPage slug="current-aurera-global-client" />;
}
