import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-miracle-official');
}

export default function PopularMiracleOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-miracle-official" />;
}
