import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ameria-official');
}

export default function FreshStartAmeriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ameria-official" />;
}
