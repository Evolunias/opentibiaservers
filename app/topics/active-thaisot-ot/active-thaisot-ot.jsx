import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thaisot-ot');
}

export default function ActiveThaisotOtKeywordPage() {
  return <StaticKeywordPage slug="active-thaisot-ot" />;
}
