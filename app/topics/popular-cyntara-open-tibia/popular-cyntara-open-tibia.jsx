import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-cyntara-open-tibia');
}

export default function PopularCyntaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-cyntara-open-tibia" />;
}
