import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-miracle-ots');
}

export default function OfficialMiracleOtsKeywordPage() {
  return <StaticKeywordPage slug="official-miracle-ots" />;
}
