import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-login');
}

export default function RubinotLoginKeywordPage() {
  return <StaticKeywordPage slug="rubinot-login" />;
}
