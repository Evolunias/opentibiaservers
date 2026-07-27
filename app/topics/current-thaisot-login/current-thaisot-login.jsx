import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thaisot-login');
}

export default function CurrentThaisotLoginKeywordPage() {
  return <StaticKeywordPage slug="current-thaisot-login" />;
}
