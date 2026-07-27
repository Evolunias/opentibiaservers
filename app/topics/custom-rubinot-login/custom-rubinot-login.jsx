import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rubinot-login');
}

export default function CustomRubinotLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-rubinot-login" />;
}
