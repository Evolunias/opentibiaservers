import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ameria-official');
}

export default function TopAmeriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-ameria-official" />;
}
