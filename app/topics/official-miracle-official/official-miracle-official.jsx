import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-miracle-official');
}

export default function OfficialMiracleOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-miracle-official" />;
}
