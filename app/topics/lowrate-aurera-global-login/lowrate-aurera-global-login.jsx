import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-aurera-global-login');
}

export default function LowrateAureraGlobalLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-aurera-global-login" />;
}
