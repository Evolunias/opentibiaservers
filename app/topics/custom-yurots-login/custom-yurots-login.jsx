import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-yurots-login');
}

export default function CustomYurotsLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-yurots-login" />;
}
