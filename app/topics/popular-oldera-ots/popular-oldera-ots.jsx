import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oldera-ots');
}

export default function PopularOlderaOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-oldera-ots" />;
}
