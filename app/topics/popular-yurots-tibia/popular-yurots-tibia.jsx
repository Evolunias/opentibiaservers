import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-yurots-tibia');
}

export default function PopularYurotsTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-yurots-tibia" />;
}
