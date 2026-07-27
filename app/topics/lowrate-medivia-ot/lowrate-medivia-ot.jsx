import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-medivia-ot');
}

export default function LowrateMediviaOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-medivia-ot" />;
}
