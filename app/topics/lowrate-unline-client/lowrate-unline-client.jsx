import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-unline-client');
}

export default function LowrateUnlineClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-unline-client" />;
}
