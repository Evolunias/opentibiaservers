import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thaisot-ot');
}

export default function TopThaisotOtKeywordPage() {
  return <StaticKeywordPage slug="top-thaisot-ot" />;
}
