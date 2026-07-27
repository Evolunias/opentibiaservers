import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-medivia-login');
}

export default function CurrentMediviaLoginKeywordPage() {
  return <StaticKeywordPage slug="current-medivia-login" />;
}
