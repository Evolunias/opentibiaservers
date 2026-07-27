import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thaisot-ots');
}

export default function CustomThaisotOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-thaisot-ots" />;
}
