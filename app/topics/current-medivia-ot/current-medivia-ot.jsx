import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-medivia-ot');
}

export default function CurrentMediviaOtKeywordPage() {
  return <StaticKeywordPage slug="current-medivia-ot" />;
}
