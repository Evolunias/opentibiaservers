import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thaisot-login');
}

export default function LowrateThaisotLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thaisot-login" />;
}
