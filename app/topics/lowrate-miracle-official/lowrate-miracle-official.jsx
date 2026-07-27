import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-miracle-official');
}

export default function LowrateMiracleOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-miracle-official" />;
}
