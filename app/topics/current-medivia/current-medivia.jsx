import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-medivia');
}

export default function CurrentMediviaKeywordPage() {
  return <StaticKeywordPage slug="current-medivia" />;
}
