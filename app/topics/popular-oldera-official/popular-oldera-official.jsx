import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oldera-official');
}

export default function PopularOlderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-oldera-official" />;
}
