import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classick-drakoria-login');
}

export default function LowrateClassickDrakoriaLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classick-drakoria-login" />;
}
