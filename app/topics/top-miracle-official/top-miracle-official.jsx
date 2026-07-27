import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-miracle-official');
}

export default function TopMiracleOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-miracle-official" />;
}
