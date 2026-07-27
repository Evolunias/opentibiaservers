import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-aurera-global-login');
}

export default function CurrentAureraGlobalLoginKeywordPage() {
  return <StaticKeywordPage slug="current-aurera-global-login" />;
}
