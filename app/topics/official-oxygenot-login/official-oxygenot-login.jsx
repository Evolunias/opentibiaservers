import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oxygenot-login');
}

export default function OfficialOxygenotLoginKeywordPage() {
  return <StaticKeywordPage slug="official-oxygenot-login" />;
}
