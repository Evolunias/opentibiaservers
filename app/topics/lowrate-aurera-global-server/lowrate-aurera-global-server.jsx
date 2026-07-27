import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-aurera-global-server');
}

export default function LowrateAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-aurera-global-server" />;
}
