import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realesta-login');
}

export default function LowrateRealestaLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realesta-login" />;
}
