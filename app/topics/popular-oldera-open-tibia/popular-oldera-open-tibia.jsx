import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oldera-open-tibia');
}

export default function PopularOlderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-oldera-open-tibia" />;
}
