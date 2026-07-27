import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oldera-tibia');
}

export default function PopularOlderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-oldera-tibia" />;
}
