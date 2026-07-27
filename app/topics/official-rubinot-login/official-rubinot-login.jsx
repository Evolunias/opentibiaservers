import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rubinot-login');
}

export default function OfficialRubinotLoginKeywordPage() {
  return <StaticKeywordPage slug="official-rubinot-login" />;
}
