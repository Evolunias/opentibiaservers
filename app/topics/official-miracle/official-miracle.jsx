import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-miracle');
}

export default function OfficialMiracleKeywordPage() {
  return <StaticKeywordPage slug="official-miracle" />;
}
