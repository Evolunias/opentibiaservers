import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thaisot-ot');
}

export default function CustomThaisotOtKeywordPage() {
  return <StaticKeywordPage slug="custom-thaisot-ot" />;
}
