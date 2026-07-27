import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-medivia-ots');
}

export default function CurrentMediviaOtsKeywordPage() {
  return <StaticKeywordPage slug="current-medivia-ots" />;
}
