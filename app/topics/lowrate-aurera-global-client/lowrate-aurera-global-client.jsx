import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-aurera-global-client');
}

export default function LowrateAureraGlobalClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-aurera-global-client" />;
}
