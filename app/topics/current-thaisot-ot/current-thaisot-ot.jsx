import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thaisot-ot');
}

export default function CurrentThaisotOtKeywordPage() {
  return <StaticKeywordPage slug="current-thaisot-ot" />;
}
