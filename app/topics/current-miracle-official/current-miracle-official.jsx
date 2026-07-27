import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-miracle-official');
}

export default function CurrentMiracleOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-miracle-official" />;
}
