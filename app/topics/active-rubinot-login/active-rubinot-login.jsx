import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rubinot-login');
}

export default function ActiveRubinotLoginKeywordPage() {
  return <StaticKeywordPage slug="active-rubinot-login" />;
}
