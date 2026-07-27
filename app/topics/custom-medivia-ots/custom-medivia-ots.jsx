import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-medivia-ots');
}

export default function CustomMediviaOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-medivia-ots" />;
}
