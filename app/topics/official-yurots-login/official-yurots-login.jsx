import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-yurots-login');
}

export default function OfficialYurotsLoginKeywordPage() {
  return <StaticKeywordPage slug="official-yurots-login" />;
}
