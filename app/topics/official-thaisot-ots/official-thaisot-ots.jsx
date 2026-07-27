import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thaisot-ots');
}

export default function OfficialThaisotOtsKeywordPage() {
  return <StaticKeywordPage slug="official-thaisot-ots" />;
}
