import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-medivia-ots');
}

export default function LowrateMediviaOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-medivia-ots" />;
}
