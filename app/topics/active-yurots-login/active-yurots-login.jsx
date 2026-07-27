import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-yurots-login');
}

export default function ActiveYurotsLoginKeywordPage() {
  return <StaticKeywordPage slug="active-yurots-login" />;
}
