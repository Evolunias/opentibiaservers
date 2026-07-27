import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thaisot-ot');
}

export default function LowrateThaisotOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thaisot-ot" />;
}
