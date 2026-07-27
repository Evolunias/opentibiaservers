import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-official');
}

export default function MiracleOfficialKeywordPage() {
  return <StaticKeywordPage slug="miracle-official" />;
}
