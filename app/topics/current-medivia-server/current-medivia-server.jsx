import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-medivia-server');
}

export default function CurrentMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="current-medivia-server" />;
}
