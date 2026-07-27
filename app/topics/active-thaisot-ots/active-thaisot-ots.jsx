import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thaisot-ots');
}

export default function ActiveThaisotOtsKeywordPage() {
  return <StaticKeywordPage slug="active-thaisot-ots" />;
}
