import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oxygenot-login');
}

export default function TopOxygenotLoginKeywordPage() {
  return <StaticKeywordPage slug="top-oxygenot-login" />;
}
