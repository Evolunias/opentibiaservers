import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ameria-official');
}

export default function BestAmeriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-ameria-official" />;
}
