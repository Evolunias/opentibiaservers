import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-demolidores-open-tibia');
}

export default function PopularDemolidoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-demolidores-open-tibia" />;
}
