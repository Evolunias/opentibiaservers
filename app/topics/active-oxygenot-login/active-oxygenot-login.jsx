import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oxygenot-login');
}

export default function ActiveOxygenotLoginKeywordPage() {
  return <StaticKeywordPage slug="active-oxygenot-login" />;
}
