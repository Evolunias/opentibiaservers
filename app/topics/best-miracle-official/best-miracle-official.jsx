import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-miracle-official');
}

export default function BestMiracleOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-miracle-official" />;
}
